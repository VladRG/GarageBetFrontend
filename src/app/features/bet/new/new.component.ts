import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetService, MatchService } from '@app/core';
import { MatchModel } from '@app/models';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewBetComponent {

  constructor(private route: ActivatedRoute, private service: BetService, private matchService: MatchService) {
    this.route.params.subscribe((params) => {

    });
  }

  match: MatchModel;

  init(matchId: number) {
    this.matchService.find(matchId).subscribe((response: MatchModel) => {
      this.match = response;
    });
  }
}
