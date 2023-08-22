import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module'
import { ExamplesComponent } from './containers/examples.component';

import * as fromCustomDirectives from './custom-directives';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    ...fromCustomDirectives.directives,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
