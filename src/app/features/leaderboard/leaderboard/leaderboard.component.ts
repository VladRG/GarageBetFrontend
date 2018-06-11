import { Component, OnInit, Input } from '@angular/core';
import { AppAuthService, AppLayoutService, LeaderboardService } from '@app/core';
import { UserStats, UserStatsResponse } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  group: number;

  constructor(
    private service: LeaderboardService,
    private route: ActivatedRoute,
    public authService: AppAuthService,
    public layoutService: AppLayoutService) {
    super();
  }

  stats: Array<UserStats> = [];
  position = 0;
  userEmail = '';
  pageSize = 20;
  page = 0;
  count = 0;
  championshipId = 0;

  ngOnInit() {
    if (!this.group) {
      this.wrapObservableWithSpinner(
        this.service.getLeaderboard(this.page, this.pageSize))
        .subscribe((response: UserStatsResponse) => {
          this.updateData(response);
        });
    } else {
      this.wrapObservableWithSpinner(
        this.service.getLeaderboardForGroup(this.page, this.pageSize, this.group)
      ).subscribe(this.updateData);
    }
  }

  updateData(response: UserStatsResponse) {
    this.stats = response.stats;
    this.count = response.count;
    this.position = response.position;
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
