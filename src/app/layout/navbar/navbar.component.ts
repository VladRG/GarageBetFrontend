import { Component } from '@angular/core';
import { AppAuthService } from '@app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private service: AppAuthService) { }

  logout() {
    this.service.logout();
  }
}
