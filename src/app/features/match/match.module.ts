import { NgModule } from '@angular/core';
import { MatchFormComponent } from './form/form.component';
import { EditMatchComponent } from './edit/edit.component';
import { NewMatchComponent } from './new/new.component';
import { AppSharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match.router';
import { ListMatchesComponent } from './list/list.component';
import { EndMatchComponent } from './end/end.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';

@NgModule({
  declarations: [
    MatchFormComponent,
    EditMatchComponent,
    NewMatchComponent,
    ListMatchesComponent,
    EndMatchComponent,
    MatchStatsComponent
  ],
  imports: [
    AppSharedModule,
    MatchRoutingModule
  ],
  entryComponents: [
    NewMatchComponent,
    EditMatchComponent
  ]
})
export class MatchModule { }
