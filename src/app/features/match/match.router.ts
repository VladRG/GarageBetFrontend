import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './list/list.component';
import { NewMatchComponent } from './new/new.component';
import { EndMatchComponent } from './end/end.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';
import { AppLoggedInGuard } from '@app/core';

const routes: Routes = [
  {
    path: 'match',
    component: ListMatchesComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'match/add/:id',
    component: NewMatchComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'match/end/:id',
    component: EndMatchComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'match/stats/:id',
    component: MatchStatsComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'match/today',
    component: ListMatchesComponent,
    data: {
      today: true
    },
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'match/:championshipId',
    component: ListMatchesComponent,
    canActivate: [AppLoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
