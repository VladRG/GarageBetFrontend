import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'championship',
    component: ChampionshipListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChampionshipRoutingModule { }
