import { Component, OnInit } from '@angular/core';
import { MatchService } from '@app/core';
import {  MatchBetModel } from '@app/models';
import { MatDialog } from '@angular/material';
import { NewMatchComponent } from '../new/new.component';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListMatchesComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(
    private service: MatchService,
    private dialog: MatDialog) {
    super();
  }

  matchBets: Array<MatchBetModel> = [];

  ngOnInit() {
    this.service.getMatchBets()
      .subscribe((response: Array<MatchBetModel>) => {
        this.matchBets = response;
      });
  }

  create() {
    const createDialog = this.dialog.open(NewMatchComponent, {
      width: '420px',
      height: '60%'
    });
  }
}
