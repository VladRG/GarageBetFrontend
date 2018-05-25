import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetService, MatchService } from '@app/core';
import { MatchModel, BetModel, MatchBetForm } from '@app/models';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewBetComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BetService,
    private matchService: MatchService
  ) {
    this.route.params.subscribe((params) => {
      this.matchService.getModelForNewBet(params.matchId).subscribe((response: MatchBetForm) => {
        this.match = response;
      });
    });
  }

  match: MatchBetForm;

  save(bet: BetModel) {
    this.service.add(bet).subscribe(response => this.router.navigateByUrl('match'));
  }

  cancel() {
    this.router.navigateByUrl('match');
  }
}
