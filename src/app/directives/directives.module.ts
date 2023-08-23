import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module'
import { ExamplesComponent } from './containers/examples.component';

import * as fromCustomDirectives from './custom-directives';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    ExamplesComponent,
    ...fromCustomDirectives.directives,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
