import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppLoginDialog, AppRegisterDialog } from '../components';
import { AppLayoutService } from '@app/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AppLayoutComponent {

  constructor(public dialog: MatDialog, private service: AppLayoutService) { }

  @HostListener('window:resize')
  onResize(event) {
    this.service.contentResize(event);
  }

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
