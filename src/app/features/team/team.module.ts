import { NgModule } from "@angular/core";
import { TeamListComponent } from "./list/list.component";
import { TeamFormComponent } from "./form/form.component";
import { TeamCardComponent } from "./card/card.component";
import { AppSharedModule } from "@app/shared";
import { TeamRoutingModule } from "./team.router";
import { NewTeamComponent } from "./new/new.component";
import { EditTeamComponent } from "./edit/edit.component";

@NgModule({
  declarations: [
    TeamListComponent,
    TeamFormComponent,
    TeamCardComponent,
    TeamFormComponent,
    NewTeamComponent,
    EditTeamComponent
  ],
  imports: [
    AppSharedModule,
    TeamRoutingModule
  ],
  entryComponents: [
    NewTeamComponent,
    EditTeamComponent
  ]
})
export class TeamModule { }
