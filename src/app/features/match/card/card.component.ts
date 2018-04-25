import { Component, OnInit, Input } from '@angular/core';
import { Match } from '@app/models';

@Component({
  selector: 'app-match-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input()
  match: Match;

  constructor() { }

  ngOnInit() {
  }

}
