import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[creditCard]'
})
export class CreditCardDirective {

  @HostBinding('style.border') border = '';

  @HostListener('input', ['$event.target'])
  onKeyDown(input: HTMLInputElement) {
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substring(i, i + 4));
    }

    input.value = numbers.join(' ');

    this.border = '';
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }

  }

  constructor() { }

}
