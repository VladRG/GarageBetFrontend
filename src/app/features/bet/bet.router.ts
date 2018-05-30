import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBetComponent } from './new/new.component';
import { BetListComponent } from './list/list.component';
import { EditBetComponent } from './edit/edit.component';
import { AppLoggedInGuard } from '@app/core';

const routes: Routes = [
  {
    path: 'bet',
    component: BetListComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'bet/match/:matchId',
    component: NewBetComponent,
    canActivate: [AppLoggedInGuard]
  },
  {
    path: 'bet/edit/:id',
    component: EditBetComponent,
    canActivate: [AppLoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BetRoutingModule { }
