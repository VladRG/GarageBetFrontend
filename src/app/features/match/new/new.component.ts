import { Component, OnInit, } from '@angular/core';
import { MatchModel, MatchBetModel } from '@app/models';
import { ModalFormBase } from '@app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '@app/core';

@Component({
  selector: 'app-new-match',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewMatchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MatchService
  ) { }

  match: MatchBetModel = new MatchBetModel();
  championshipId = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.championshipId = parseInt(params.id, 10);
      this.match.homeScore = -1;
      this.match.awayScore = -1;
      this.match.championshipId = this.championshipId;
    });
  }

  save(match: MatchModel) {
    this.service.add(match).subscribe((response) => {
      this.router.navigateByUrl('match');
    });
  }

  cancel() {
    this.router.navigateByUrl('match');
  }
}
