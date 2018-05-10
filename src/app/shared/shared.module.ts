import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components';
import {
  MatDialogModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatTableModule, MatCardModule, MatListModule,
  MatGridListModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatMenuModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateToTimeStringPipe } from './pipes';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,

    // Pipes
    DateToTimeStringPipe
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  exports: [
    LoadingSpinnerComponent,

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
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    CommonModule,

    // Pipes
    DateToTimeStringPipe
  ],
  entryComponents: []
})
export class AppSharedModule { }
