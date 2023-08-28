import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterViewInit, AfterContentInit {
  showMessage = false;

  @ViewChild('email') email!: ElementRef;

  @ContentChild(AuthRememberComponent) remember?: AuthRememberComponent;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
  }

  ngAfterContentInit(): void {
    if (!this.remember) return;

    this.remember.checked.subscribe(checked => this.showMessage = checked);

  }
}
