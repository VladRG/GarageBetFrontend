import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.router';
import { AppSharedModule } from '@app/shared';

@NgModule({
  imports: [
    AppSharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
