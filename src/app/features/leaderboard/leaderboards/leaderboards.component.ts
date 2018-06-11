import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '@app/core';
import { LeaderboardSummary } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent extends HasLoadingSpinnerBase implements OnInit {

  constructor(private service: LeaderboardService) {
    super();
  }

  currentGroup = 0;
  leaderboards: Array<LeaderboardSummary> = [];
  groups: Array<any> = [];

  ngOnInit() {
    this.wrapObservableWithSpinner(this.service.getLeaderboards()).subscribe((response: Array<LeaderboardSummary>) => {
      this.leaderboards = response;
    });
  }

  checkSelected(group: number): boolean {
    return this.currentGroup === group;
  }

  select(group: number) {
    this.currentGroup = group;
  }

  onDelete(group: number) {
    this.service.delete(group).subscribe(() => {
      this.ngOnInit();
    });
  }

  onLeave(group: number) {
    this.service.leaveLeaderboard(group)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
