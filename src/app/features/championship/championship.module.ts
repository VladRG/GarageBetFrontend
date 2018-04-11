import { NgModule } from "@angular/core";
import { AppSharedModule } from "@app/shared";
import { ChampionshipRoutingModule } from "./championship.router";
import { ChampionshipListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ChampionshipCardComponent } from "./card/card.component";
import { NewChampionshipComponent } from "./new/new.component";
import { EditChampionshipComponent } from "./edit/edit.component";
import { ChampionshipFormComponent } from "./form/form.component";

@NgModule({
  declarations: [
    ChampionshipListComponent,
    ChampionshipCardComponent,
    NewChampionshipComponent,
    EditChampionshipComponent,
    ChampionshipFormComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    ChampionshipRoutingModule
  ],
  providers: [],
  entryComponents: [
    NewChampionshipComponent,
    EditChampionshipComponent
  ]
})
export class ChampionshipModule { }
