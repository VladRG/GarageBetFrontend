import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent, ModalConfirmComponent } from './components';
import {
  MatDialogModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatTableModule, MatCardModule, MatListModule,
  MatGridListModule, MatSelectModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatAutocompleteModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateToTimeStringPipe, StandingGroupPipe, ChampionshipGroupPipe } from './pipes';
import { MatchBetCardComponent } from './components';
import { AppRegisterDialog } from './components/register/register.component';
import { AppLoginDialog } from './components/login/login.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    MatchBetCardComponent,
    AppLoginDialog,
    AppRegisterDialog,
    ModalConfirmComponent,

    // Pipes
    DateToTimeStringPipe,
    StandingGroupPipe,
    ChampionshipGroupPipe
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
    MatAutocompleteModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    LoadingSpinnerComponent,
    MatchBetCardComponent,
    ModalConfirmComponent,

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
    MatAutocompleteModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    CommonModule,

    // Pipes
    DateToTimeStringPipe,
    StandingGroupPipe,
    ChampionshipGroupPipe
  ],
  entryComponents: [ModalConfirmComponent]
})
export class AppSharedModule { }
