import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppSharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app-routing.module';
import { ChampionshipModule, TeamModule, MatchModule, AuthModule } from '@app/features';
import { AppCoreModule } from '@app/core';
import { AppLayoutModule } from '@app/layout';
import { BetModule } from '@app/features/bet/bet.module';
import { LeaderboardModule } from '@app/features/leaderboard';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Feature modules
    ChampionshipModule,
    TeamModule,
    MatchModule,
    BetModule,
    AuthModule,
    LeaderboardModule,

    // Top Level modules
    AppCoreModule,
    AppSharedModule,
    AppRoutingModule,
    AppLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
