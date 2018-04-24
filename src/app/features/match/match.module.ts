import { NgModule } from "@angular/core";
import { MatchFormComponent } from "./form/form.component";
import { EditMatchComponent } from "./edit/edit.component";
import { NewMatchComponent } from "./new/new.component";
import { MatchCardComponent } from "./card/card.component";
import { AppSharedModule } from "@app/shared";
import { CommonModule } from "@angular/common";
import { MatchRoutingModule } from "./match.router";
import { ListMatchesComponent } from "./list/list.component";

@NgModule({
  declarations: [
    MatchCardComponent,
    MatchFormComponent,
    EditMatchComponent,
    NewMatchComponent,
    ListMatchesComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
