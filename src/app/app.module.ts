import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppSharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppAboutComponent, AppNotFoundComponent } from '@app/static-pages';
import { ChampionshipModule, TeamModule } from '@app/features';
import { AppCoreModule } from '@app/core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Feature modules
    ChampionshipModule,
    TeamModule,

    // Top Level modules
    AppCoreModule,
    AppSharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
