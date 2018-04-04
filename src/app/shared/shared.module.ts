import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/layout.component';
import { AppNavbarComponent } from './layout/navbar/navbar.component';
import { AppFooterComponent } from './layout/footer/footer.component';
import { AppLoginComponent, AppRegisterComponent } from './components';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppLoginComponent,
    AppRegisterComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent,
    HttpClientModule
  ]
})
export class AppSharedModule { }
