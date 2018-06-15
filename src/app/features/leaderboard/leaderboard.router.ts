import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoggedInGuard } from '@app/core';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { StatsComponent } from './stats/stats.component';
import { LeaderboardFormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'leaderboard',
    component: LeaderboardsComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'leaderboard/add',
    component: LeaderboardFormComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'leaderboard/edit/:group',
    component: LeaderboardFormComponent,
    canActivate: [AppLoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
