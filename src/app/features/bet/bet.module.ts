import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { BetRoutingModule } from './bet.router';

@NgModule({
  declarations: [
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
