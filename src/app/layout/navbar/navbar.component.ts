import { Component } from '@angular/core';
import { AppAuthService, AppLayoutService } from '@app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private service: AppAuthService, private layout: AppLayoutService) { }

  logout() {
    this.service.logout();
  }
}
