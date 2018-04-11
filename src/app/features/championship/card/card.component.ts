import { Component, OnInit, Input, Output } from '@angular/core';
import { Championship } from '../../../models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-championship-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ChampionshipCardComponent {

  @Input()
  championship: Championship;

  @Output()
  edit: EventEmitter<Championship> = new EventEmitter()

  constructor() { }

  getImagePath() {
    return `url("assets/championships/${this.championship.name.toLowerCase().replace(" ", "-")}.png")`
  }

  onEdit() {
    this.edit.emit(this.championship);
  }

}
