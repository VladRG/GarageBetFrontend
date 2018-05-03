import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BetModel } from '@app/models';

@Component({
  selector: 'app-bet-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class BetFormComponent implements OnInit {

  constructor() { }

  @Input()
  bet: BetModel;

  @Output()
  save: EventEmitter<BetModel> = new EventEmitter();

  @Output()
  cancel: EventEmitter<BetModel> = new EventEmitter();

  onSave() {
    this.save.emit(this.bet);
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnInit() { }
}
