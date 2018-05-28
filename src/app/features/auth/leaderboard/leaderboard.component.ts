import { Component, OnInit } from '@angular/core';
import { BetService, AppAuthService } from '@app/core';
import { UserStats } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(private service: BetService, private authService: AppAuthService) {
    super();
  }

  stats: Array<UserStats> = [];
  userEmail = '';

  ngOnInit() {
    this.userEmail = this.authService.getUser().email;
    this.wrapObservableWithSpinner(this.service.getLeaderboard()).subscribe((response: Array<UserStats>) => {
      this.stats = response;
    });
  }

  getPercentage(stat: UserStats) {
    return (stat.won * 3 + stat.result) / ((stat.won + stat.result + stat.lost) * 3) * 100;
  }
}
