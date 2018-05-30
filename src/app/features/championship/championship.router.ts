import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipListComponent } from './list/list.component';
import { NewChampionshipComponent } from './new/new.component';
import { AppLoggedInGuard } from '@app/core';

const routes: Routes = [
  {
    path: 'championship',
    component: ChampionshipListComponent,
    canActivate: [AppLoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChampionshipRoutingModule { }
