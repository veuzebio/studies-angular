import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, Renderer2 } from '@angular/core';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';

@Directive({
  selector: 'span[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  @Input() tooltip = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    console.log('mouseenter');

    if (!this.componentRef) {
        const componentFactory =
              this.componentFactoryResolver.resolveComponentFactory(
              TooltipComponent);
        this.componentRef = componentFactory.create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        const domElem =
              (this.componentRef.hostView as EmbeddedViewRef<any>)
              .rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
        this.setTooltipComponentProperties();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (!!this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null as any;
    }
  }

  private componentRef?: ComponentRef<any>;

  constructor(
	private elementRef: ElementRef,
	private appRef: ApplicationRef,
	private componentFactoryResolver: ComponentFactoryResolver,
	private injector: Injector) {
  }

  private setTooltipComponentProperties() {
    if (!!this.componentRef) {
      this.componentRef.instance.text = this.tooltip;
      const {left, right, bottom} =
            this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

}
