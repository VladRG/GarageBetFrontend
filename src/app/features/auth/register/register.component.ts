import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '@app/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
    this.user = new RegisterModel();
  }

  user: RegisterModel;

  register(el) {
    console.log(el);
  }

  checkPasswordMatch(password, confirmPassword): boolean {
    console.log('Checking');
    return password.value === confirmPassword.value;
  }

  ngOnInit() { }

}
