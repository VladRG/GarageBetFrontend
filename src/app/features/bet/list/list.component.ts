import { Component, OnInit } from '@angular/core';
import { BetService } from '@app/core';
import { HasLoadingSpinnerBase } from '@app/shared';
import { MatchBetModel } from '@app/models';

@Component({
  selector: 'app-bet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BetListComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(private service: BetService) {
    super();
  }

  availableBets: Array<MatchBetModel> = [];
  ngOnInit() {
    this.wrapObservableWithSpinner(this.service.getAvailable())
      .subscribe((response: Array<MatchBetModel>) => {
        this.availableBets = response;
      });
  }
}
