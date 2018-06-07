import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BetState, Match } from '@app/models';
import { Router } from '@angular/router';
import { MatchService, AppAuthService } from '@app/core';
import { MatchBetModel } from '@app/models';

@Component({
  selector: 'app-match-bet-card',
  templateUrl: './match-bet-card.component.html',
  styleUrls: ['./match-bet-card.component.css']
})
export class MatchBetCardComponent implements OnInit {

  @Input()
  matchBet: MatchBetModel;

  constructor(private router: Router, public service: MatchService, private authService: AppAuthService) { }

  bet() {
    this.router.navigateByUrl(`bet/match/${this.matchBet.matchId}`);
  }

  ngOnInit() { }

  onStats() {
    this.router.navigateByUrl(`match/stats/${this.matchBet.matchId}`);
  }

  edit() {
    this.router.navigateByUrl(`bet/edit/${this.matchBet.betId}`);
  }

  end() {
    this.router.navigateByUrl(`match/end/${this.matchBet.matchId}`);
  }

  isMatchEnded(): boolean {
    return this.matchBet.homeScore > -1 && this.matchBet.awayScore > -1;
  }

  notAvailable(): boolean {
    return this.matchBet.betState === BetState.NotAvailable;
  }

  canBet(): boolean {
    return this.matchBet.betState === BetState.CanBet && this.matchBet.betId === 0;
  }

  canEditBet(): boolean {
    return this.matchBet.betState === BetState.CanBet && this.matchBet.betId !== 0;
  }

  canSeeStats(): boolean {
    return this.matchBet.betState !== 0;
  }

  canEnd() {
    return this.authService.isAdmin();
  }

  hasBet(): boolean {
    return this.matchBet.homeBet > -1 && this.matchBet.awayBet > -1;
  }
}
