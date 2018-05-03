import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBetComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '/bet/match/:matchId',
    component: NewBetComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BetRoutingModule { }
