import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module'

import * as fromCustomDirectives from './custom-directives';
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  declarations: [
    ...fromCustomDirectives.directives,
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
