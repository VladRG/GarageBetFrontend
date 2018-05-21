import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { BetRoutingModule } from './bet.router';
import { NewBetComponent } from './new/new.component';
import { BetFormComponent } from './form/form.component';
import { BetListComponent } from './list/list.component';
import { EditBetComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    NewBetComponent,
    BetFormComponent,
    BetListComponent,
    EditBetComponent
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
