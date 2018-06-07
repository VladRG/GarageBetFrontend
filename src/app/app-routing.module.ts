import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent, AppNotFoundComponent, AppHomeComponent, HowItWorksComponent, TermsComponent } from './pages';
import { AppSharedModule } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
  {
    path: 'about',
    component: AppAboutComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsComponent
  },
  {
    path: '**',
    component: AppNotFoundComponent
  }];

@NgModule({
  declarations: [
    AppAboutComponent,
    AppNotFoundComponent,
    AppHomeComponent,
    HowItWorksComponent,
    TermsComponent
  ],
  imports: [
    AppSharedModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
