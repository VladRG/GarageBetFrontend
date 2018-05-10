import { Component, OnInit } from '@angular/core';
import { MatchService } from '@app/core';
import { MatchModel } from '@app/models';
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

  matches: Array<MatchModel> = [];

  ngOnInit() {
    this.service.get()
      .subscribe((response: Array<MatchModel>) => {
        this.matches = response;
      });
  }

  create() {
    const createDialog = this.dialog.open(NewMatchComponent, {
      width: '420px',
      height: '60%'
    });
  }
}
