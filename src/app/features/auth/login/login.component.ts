import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '@app/core';
import { Credentials } from '@app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: Credentials;
  errorMessage = '';

  constructor(
    private authService: AppAuthService,
    private router: Router
  ) {
    this.credentials = new Credentials();
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

  onLogin() {
    this.authService.login(this.credentials)
      .subscribe(response => {
        this.router.navigateByUrl('match');
      }, errorResponse => {
        this.errorMessage = errorResponse.error;
      });
  }
}
