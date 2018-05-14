import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '@app/core';
import { MatchStats, MatchModel, BetState } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.css']
})
export class MatchStatsComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(private route: ActivatedRoute, private service: MatchService) {
    super();
    this.route.params.subscribe(params => {
      this.wrapObservableArrayWithSpinner([
        this.service.getStats(params.id),
        this.service.find(params.id)
      ]).subscribe(([stats, match]: [Array<MatchStats>, MatchModel]) => {
        this.matchStats = stats;
        this.match = match;
        this.setMatchStats();
      });
    });
  }

  match: MatchModel;
  matchStats: Array<MatchStats> = [];

  won = 0;
  results = 0;
  lost = 0;

  setMatchStats() {
    this.won = this.results = this.lost = 0;
    this.matchStats.forEach(element => {
      switch (element.betState) {
        case BetState.Won:
          this.won++;
          break;
        case BetState.Result:
          this.results++;
          break;
        case BetState.Lost:
          this.lost++;
          break;
      }
    });
  }

  getPercentage() {
    return ((this.won * 3) + this.results) / ((this.won + this.results + this.lost) * 3) * 100;
  }

  ngOnInit() { }
}
