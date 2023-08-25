import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: fromContainers.HomeComponent
  },
  {
    path: 'directives',
    title: 'Directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'advanced-components',
    title: 'Advanced Components',
    loadChildren: () => import('./advanced-components/advanced-components.module').then(m => m.AdvancedComponentsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'Error',
    component: fromContainers.ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
