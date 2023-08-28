import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  templateUrl: './auth-remember.component.html',
})
export class AuthRememberComponent {
  @Output() checked = new EventEmitter<boolean>();

  check(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked.emit(input.checked);
  }
}
