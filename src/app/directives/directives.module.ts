import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module'
import { ExamplesComponent } from './containers/examples.component';
import { CreditCardDirective } from './custom-directives/credit-card.directive';



@NgModule({
  declarations: [
    ExamplesComponent,
    CreditCardDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
