import { Component, OnInit, Input } from '@angular/core';
import { MatchBetModel, BetState, Match } from '@app/models';
import { Router } from '@angular/router';
import { MatchService } from '@app/core';

@Component({
  selector: 'app-match-bet-card',
  templateUrl: './match-bet-card.component.html',
  styleUrls: ['./match-bet-card.component.css']
})
export class MatchBetCardComponent implements OnInit {

  @Input()
  matchBet: MatchBetModel;

  constructor(private router: Router, public service: MatchService) { }

  bet() {
    this.router.navigateByUrl(`bet/match/${this.matchBet.match.id}`);
  }

  ngOnInit() { }

  onStats() {
    this.router.navigateByUrl(`match/stats/${this.matchBet.match.id}`);
  }

  onEdit() {

  }

  end() {
    this.router.navigateByUrl(`match/end/${this.matchBet.match.id}`);
  }
}
