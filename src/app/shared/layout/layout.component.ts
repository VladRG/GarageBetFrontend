import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppLoginDialog, AppRegisterDialog } from '../components';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  login() {
    const loginDialogRef = this.dialog.open(AppLoginDialog, {
      width: '320px',
      height: '320px'
    });
  }

  register() {
    const registerDialogRef = this.dialog.open(AppRegisterDialog, {
      width: '320px',
      height: '60%'
    });
  }

}
