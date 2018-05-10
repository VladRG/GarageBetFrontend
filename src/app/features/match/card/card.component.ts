import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '@app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input()
  match: MatchModel;

  constructor(private router: Router) { }

  bet() {
    this.router.navigateByUrl(`bet/match/${this.match.id}`);
  }

  ngOnInit() { }

  onStats() {

  }

  onEdit() {

  }
}
