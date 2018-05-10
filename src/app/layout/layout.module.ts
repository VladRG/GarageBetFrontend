import { NgModule } from '@angular/core';
import { AppFooterComponent } from './footer/footer.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { AppLayoutComponent } from './layout.component';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AppFooterComponent,
    AppNavbarComponent,
    AppLayoutComponent
  ],
  imports: [
    AppSharedModule
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule { }
