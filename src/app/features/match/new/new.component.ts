import { Component, OnInit, } from '@angular/core';
import { Match } from '@app/models';
import { ModalFormBase } from '@app/shared';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '@app/core';

@Component({
  selector: 'app-new-match',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewMatchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: MatchService
  ) { }

  match: Match = new Match();
  championshipId = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.championshipId = parseInt(params.id);
      this.match.homeScore = -1;
      this.match.awayScore = -1;
      this.match.championshipId = this.championshipId;
    });
  }

  save(match: Match) {
    console.log(match);
    this.service.add(match).subscribe();
  }
}
