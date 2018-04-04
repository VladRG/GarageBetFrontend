import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent, AppNotFoundComponent, AppHomeComponent } from './static-pages';

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
    path: '**',
    component: AppNotFoundComponent
  }];

@NgModule({
  declarations: [
    AppAboutComponent,
    AppNotFoundComponent,
    AppHomeComponent
  ],
  imports: [
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
