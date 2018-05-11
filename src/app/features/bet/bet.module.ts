import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { BetRoutingModule } from './bet.router';
import { NewBetComponent } from './new/new.component';
import { BetFormComponent } from './form/form.component';
import { BetListComponent } from './list/list.component';

@NgModule({
  declarations: [
    NewBetComponent,
    BetFormComponent,
    BetListComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    BetRoutingModule
  ],
  providers: [],
  entryComponents: [
  ]
})
export class BetModule { }
