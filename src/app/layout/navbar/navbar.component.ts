import { Component } from '@angular/core';
import { AppAuthService, AppLayoutService } from '@app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent {

  constructor(
    public service: AppAuthService,
    public layout: AppLayoutService
    ) { }

  logout() {
    this.service.logout();
  }
}
