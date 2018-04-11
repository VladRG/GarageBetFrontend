import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '@app/models';

@Component({
  selector: 'app-team-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class TeamFormComponent implements OnInit {

  @Input()
  team: Team;

  @Output()
  save: EventEmitter<Team> = new EventEmitter();

  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.team) {
      this.team = new Team();
    }
  }

  onSave() {
    this.save.emit(this.team);
  }

  onCancel() {
    this.cancel.emit(true);
  }
}
