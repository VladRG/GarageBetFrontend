import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BetModel, MatchModel } from '@app/models';

@Component({
  selector: 'app-bet-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class BetFormComponent implements OnInit {

  constructor() { }

  @Input()
  match: MatchModel;

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
  }
}
