import { NgModule } from '@angular/core';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { StatsComponent } from './stats/stats.component';
import { AppSharedModule } from '@app/shared';
import { AppCoreModule } from '@app/core';
import { LeaderboardRoutingModule } from './leaderboard.router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AddLeaderboardComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LeaderboardsComponent,
    LeaderboardComponent,
    AddLeaderboardComponent,
    StatsComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppSharedModule,
    AppCoreModule,
    LeaderboardRoutingModule
  ]
})
export class LeaderboardModule { }
