import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <div class="container">
        <a class="nav-link"
          routerLink="directives"
          routerLinkActive="active"
          ariaCurrentWhenActive="page">
            Directives
        </a>
        <a class="nav-link"
          routerLink="advanced-components"
          routerLinkActive="active"
          ariaCurrentWhenActive="page">
            Advanced Components
        </a>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'studies-angular';
}
