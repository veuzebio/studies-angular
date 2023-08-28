import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedComponentsRoutingModule } from './advanced-components-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import * as fromContainers from './containers';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    ...fromContainers.containers,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    AdvancedComponentsRoutingModule
  ]
})
export class AdvancedComponentsModule { }
