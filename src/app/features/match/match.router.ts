import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './list/list.component';
import { NewMatchComponent } from './new/new.component';

const routes: Routes = [
  {
    path: 'match',
    component: ListMatchesComponent
  },
  {
    path: 'match/add/:id',
    component: NewMatchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
