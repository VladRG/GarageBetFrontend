import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { AuthRoutingModule } from './auth.router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppSharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
