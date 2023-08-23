import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import { TooltipComponent } from '../../components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip',
})
export class TooltipDirective implements OnDestroy {
  private tooltipComponent?: ComponentRef<TooltipComponent>;

  @Input('tooltip') tooltipContent = '';

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.tooltipComponent) return;

    this.destroy();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipComponent) return;

    const { left, right, bottom } = this.element.nativeElement.getBoundingClientRect();

    this.tooltipComponent = this.container.createComponent(TooltipComponent);
    this.tooltipComponent.instance.text = this.tooltipContent;
    this.tooltipComponent.instance.left = (right - left) / 2 + left;
    this.tooltipComponent.instance.top = bottom;

    const element = this.tooltipComponent.location.nativeElement as HTMLElement;
    const div = element.firstChild;

    this.renderer.addClass(div, 'floating');

  }

  constructor(
    private container: ViewContainerRef,
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy(): void {
    this.tooltipComponent?.destroy();
    this.tooltipComponent = undefined;
  }
}
