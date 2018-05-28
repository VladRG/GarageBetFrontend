import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './list/list.component';
import { NewMatchComponent } from './new/new.component';
import { EndMatchComponent } from './end/end.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';

const routes: Routes = [
  {
    path: 'match',
    component: ListMatchesComponent
  },
  {
    path: 'match/add/:id',
    component: NewMatchComponent
  },
  {
    path: 'match/end/:id',
    component: EndMatchComponent
  },
  {
    path: 'match/stats/:id',
    component: MatchStatsComponent
  },
  {
    path: 'match/today',
    component: ListMatchesComponent,
    data: {
      today: true
    }
  },
  {
    path: 'match/:championshipId',
    component: ListMatchesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
