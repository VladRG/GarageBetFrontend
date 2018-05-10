import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '@app/models';

@Component({
  selector: 'app-match-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input()
  match: MatchModel;

  constructor() { }

  getBetLink() {
    return `/bet/${this.match.id}`;
  }

  ngOnInit() { }

  onStats() {

  }

  onEdit() {

  }
}
