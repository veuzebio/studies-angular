import { AfterContentInit, Component, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { AuthRememberComponent } from '../../components/auth-remember/auth-remember.component';

@Component({
  templateUrl:'./content-projection.component.html'
})
export class ContentProjectionComponent implements AfterContentInit, OnDestroy{


  @ViewChild('login', { static: true, read: ViewContainerRef }) login!: ViewContainerRef;

  constructor() {

  }

  ngAfterContentInit(): void {
    if (!this.login) return;
    this.login.createComponent(AuthFormComponent,);
  }

  ngOnDestroy(): void {
  }

}
