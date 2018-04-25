import { Component, OnInit, Input, Output } from '@angular/core';
import { Championship } from '../../../models';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ChampionshipCardComponent {

  constructor(private router: Router) { }

  @Input()
  championship: Championship;

  @Output()
  edit: EventEmitter<Championship> = new EventEmitter()

  getImagePath() {
    return `url("assets/championships/${this.championship.name.toLowerCase().replace(" ", "-")}.png")`
  }

  onEdit() {
    this.edit.emit(this.championship);
  }

  addMatch(championshipId: number) {
    this.router.navigateByUrl(`match/add/${championshipId}`);
  }
}
