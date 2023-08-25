import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[creditCard]'
})
export class CreditCardDirective {

  @HostBinding('class.is-invalid') isInvalid = false;

  @HostListener('input', ['$event.target'])
  onKeyDown(input: HTMLInputElement) {
    console.log(this.isInvalid);

    let value = input.value.replace(/\s+/g, '');

    if (value.length > 16) {
      value = value.substring(0, 16);
    }

    let numbers = [];

    for (let i = 0; i < value.length; i += 4) {
      numbers.push(value.substring(i, i + 4));
    }

    input.value = numbers.join(' ');

    this.isInvalid = (/[^\d]+/.test(value));
  }
}
