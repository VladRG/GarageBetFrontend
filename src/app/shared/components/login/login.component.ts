import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppAuthService } from '@app/core';
import { Credentials } from '@app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginDialog {

  credentials: Credentials;
  errorMessage = '';

  constructor(
    public dialogRef: MatDialogRef<AppLoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AppAuthService) {
    this.credentials = new Credentials();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onLogin() {
    this.authService.login(this.credentials)
      .subscribe(response => {
        this.dialogRef.close();
      }, error => {
        this.errorMessage = error
      });
  }
}
