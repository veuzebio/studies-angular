import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[creditCard]'
})
export class CreditCardDirective {

  @HostListener('input', ['$event.target'])
  onKeyDown(input: HTMLInputElement) {
    let value = input.value.replace(/\s+/g, '');

    if (value.length > 16) {
      value = value.substring(0, 16);
    }

    let numbers = [];

    for (let i = 0; i < value.length; i += 4) {
      numbers.push(value.substring(i, i + 4));
    }

    input.value = numbers.join(' ');

    if (/[^\d]+/.test(value)) {
      this.renderer.addClass(input, 'is-invalid');
    } else {
      this.renderer.removeClass(input, 'is-invalid');
    }

  }

  constructor(private renderer: Renderer2) { }

}
