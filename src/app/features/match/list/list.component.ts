import { Component, OnInit } from '@angular/core';
import { MatchService } from '@app/core';
import { MatchModel } from '@app/models';
import { MatDialog } from '@angular/material';
import { NewMatchComponent } from '../new/new.component';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListMatchesComponent implements OnInit {

  constructor(
    private service: MatchService,
    private dialog: MatDialog) { }

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
