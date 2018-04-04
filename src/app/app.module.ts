import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppSharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppAboutComponent, AppNotFoundComponent } from './static-pages';
import { ChampionshipModule } from './features/championship/championship.module';
import { AppCoreModule } from './core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Feature modules
    ChampionshipModule,

    // Top Level modules
    AppSharedModule,
    AppCoreModule,
    AppRoutingModule,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
