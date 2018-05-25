import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBetComponent } from './new/new.component';
import { BetListComponent } from './list/list.component';
import { EditBetComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'bet',
    component: BetListComponent
  },
  {
    path: 'bet/match/:matchId',
    component: NewBetComponent,
  },
  {
    path: 'bet/edit/:id',
    component: EditBetComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BetRoutingModule { }
