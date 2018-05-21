import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterModel } from '../../../models';
import { AppAuthService } from '../../../core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class AppRegisterDialog {

  credentials: RegisterModel;
  errorMessage = '';

  constructor(
    public dialogRef: MatDialogRef<AppRegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AppAuthService) {
    this.credentials = new RegisterModel();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onRegister() {
    this.authService.register(this.credentials)
      .subscribe(response => {
        this.dialogRef.close();
      }, error => {
        this.errorMessage = error;
      });
  }

}
