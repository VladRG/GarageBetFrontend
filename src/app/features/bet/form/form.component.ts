import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BetModel, MatchModel, MatchBetForm } from '@app/models';

@Component({
  selector: 'app-bet-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class BetFormComponent implements OnInit {

  constructor() { }

  @Input()
  match: MatchBetForm;

  @Output()
  save: EventEmitter<BetModel> = new EventEmitter();

  @Output()
  cancel: EventEmitter<BetModel> = new EventEmitter();

  bet: BetModel;

  onSave() {
    console.log(this.bet);
    this.save.emit(this.bet);
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnInit() {
    this.bet = new BetModel();
    if (this.match.betId) {
      this.bet.homeScore = this.match.homeBet;
      this.bet.awayScore = this.match.awayBet;
      this.bet.matchId = this.match.matchId;
      this.bet.id = this.match.betId;
    }
  }
}
