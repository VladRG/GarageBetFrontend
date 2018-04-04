import { NgModule } from "@angular/core";
import { AppSharedModule } from "../../shared";
import { ChampionshipRoutingModule } from "./championship.router";
import { ChampionshipListComponent } from "./list/list.component";
import { ChampionshipService } from "./championship.service";

@NgModule({
  declarations: [ChampionshipListComponent],
  imports: [
    AppSharedModule,
    ChampionshipRoutingModule
  ],
  providers: [ChampionshipService]
})
export class ChampionshipModule { }
