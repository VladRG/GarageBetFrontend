import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './list/list.component';
import { AppLoggedInGuard } from '@app/core';

const routes: Routes = [
  {
    path: 'team',
    component: TeamListComponent,
    canActivate: [AppLoggedInGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
