import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor() { }

  @Output()
  login: EventEmitter<boolean> = new EventEmitter();

  @Output()
  register: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() { }

  onLogin() {
    this.login.emit(null);
  }

  onRegister() {
    this.register.emit(null);
  }
}
