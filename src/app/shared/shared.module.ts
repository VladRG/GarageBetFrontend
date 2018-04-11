import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/layout.component';
import { AppNavbarComponent } from './layout/navbar/navbar.component';
import { AppFooterComponent } from './layout/footer/footer.component';
import { AppLoginDialog, AppRegisterDialog, VgLoadingSpinnerComponent } from './components';
import {
  MatDialogModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatTableModule, MatCardModule, MatListModule,
  MatGridListModule, MatSelectModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppLoginDialog,
    AppRegisterDialog,
    VgLoadingSpinnerComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppLayoutComponent,
    VgLoadingSpinnerComponent,


    RouterModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    CommonModule
  ],
  entryComponents: [
    AppLoginDialog,
    AppRegisterDialog
  ]
})
export class AppSharedModule { }
