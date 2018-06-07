import { Component, OnInit } from '@angular/core';
import { BetService, AppAuthService } from '@app/core';
import { UserStats, UserStatsResponse } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(
    private service: BetService,
    private authService: AppAuthService,
    private route: ActivatedRoute) {
    super();

    this.route.queryParams.subscribe((params) => {
      this.userEmail = this.authService.getUser().email;
      this.championshipId = params.championshipId;
      this.wrapObservableWithSpinner(this.service.getLeaderboard(this.page, this.pageSize, params.championshipId)).subscribe((response: UserStatsResponse) => {
        this.stats = response.stats;
        this.count = response.count;
        this.position = response.position;
      });
    });
  }

  stats: Array<UserStats> = [];
  position = 0;
  userEmail = '';
  pageSize = 20;
  page = 0;
  count = 0;
  championshipId = 0;

  ngOnInit() {

  }

  loadMore() {
    this.page++;
    this.wrapObservableWithSpinner(this.service.getLeaderboard(this.page, this.pageSize, this.championshipId))
      .subscribe((response: UserStatsResponse) => {
        this.stats = this.stats.concat(response.stats);
      });
  }

  getPercentage(stat: UserStats) {
    return (stat.won * 3 + stat.result) / ((stat.won + stat.result + stat.lost) * 3) * 100;
  }
}
