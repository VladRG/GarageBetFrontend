import { Component, OnInit } from '@angular/core';
import { MatchService } from '@app/core';
import { MatchBetModel } from '@app/models';
import { MatDialog } from '@angular/material';
import { NewMatchComponent } from '../new/new.component';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListMatchesComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(
    private service: MatchService,
    private dialog: MatDialog,
    private route: ActivatedRoute) {
    super();
    this.checkRoute();
  }

  matchBets: Array<MatchBetModel> = [];

  ngOnInit() {

  }

  create() {
    const createDialog = this.dialog.open(NewMatchComponent, {
      width: '420px',
      height: '60%'
    });
  }

  private checkRoute() {
    combineLatest(this.route.params, this.route.data)
      .subscribe(routeParams => {
        if (routeParams[0].championshipId) {
          this.wrapObservableWithSpinner(
            this.service.getMatchBetsForChampionship(parseInt(routeParams[0].championshipId, 10)))
            .subscribe(response => {
              this.matchBets = response;
            });
        } else if (routeParams[1].today) {
          this.wrapObservableWithSpinner(this.service.getTodaysMatches())
            .subscribe(response => {
              this.matchBets = response;
            });
        } else {
          this.wrapObservableWithSpinner(this.service.getMatchBets()).subscribe(response => {
            this.matchBets = response;
          });
        }
      });
  }
}
