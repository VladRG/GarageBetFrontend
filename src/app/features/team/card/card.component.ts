import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../../models';

@Component({
  selector: 'app-team-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class TeamCardComponent {

  @Input()
  team: Team;

  @Output()
  edit: EventEmitter<Team> = new EventEmitter();
  constructor() { }

  getImagePath() {
    return `url("assets/team/${this.team.name.toLowerCase().replace(" ", "-")}.png")`
  }

  onEdit() {
    this.edit.emit(this.team);
  }
}
