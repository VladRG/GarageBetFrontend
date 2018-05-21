import { Component } from '@angular/core';
import { RegisterModel } from '@app/models';
import { AppAuthService } from '@app/core';
import { Router } from '@angular/router';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends HasLoadingSpinnerBase {

  constructor(private service: AppAuthService, private router: Router) {
    super();
    this.user = new RegisterModel();
  }

  user: RegisterModel;

  register() {
    this.wrapObservableWithSpinner(this.service.register(this.user))
      .subscribe(response => {
        this.router.navigateByUrl('');
      });
  }

  checkPasswordMatch(password, confirmPassword): boolean {
    return password.value === confirmPassword.value;
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
