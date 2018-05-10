import { Component } from '@angular/core';
import { RegisterModel } from '@app/models';
import { AppAuthService } from '@app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: AppAuthService, private router: Router) {
    this.user = new RegisterModel();
  }

  user: RegisterModel;

  register() {
    this.service.register(this.user)
      .subscribe(response => {
        this.router.navigateByUrl('');
      });
  }

  checkPasswordMatch(password, confirmPassword): boolean {
    return password.value === confirmPassword.value;
  }
}
