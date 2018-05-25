import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetModel, MatchModel, MatchBetForm } from '@app/models';
import { BetService, MatchService } from '@app/core';

@Component({
  selector: 'app-edit-bet',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditBetComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BetService,
    private matchService: MatchService) {

    this.route.params.subscribe((params) => {
      const betId = parseInt(params.id, 10);
      this.matchService.getModelForEditBet(betId).subscribe((response: MatchBetForm) => {
        this.match = response;
      });
    });
  }

  match: MatchBetForm;
  ngOnInit() { }

  save(bet: BetModel) {
    this.service.update(bet).subscribe(response => this.router.navigateByUrl('match'));
  }

  cancel() {
    this.router.navigateByUrl('match');
  }
}
