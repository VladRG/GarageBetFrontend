import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppAuthService, AppLayoutService, LeaderboardService } from '@app/core';
import { UserStats, UserStatsResponse } from '@app/models';
import { HasLoadingSpinnerBase, ModalConfirmComponent } from '@app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  group: number;

  @Input()
  owner: string;

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  @Output()
  leave: EventEmitter<number> = new EventEmitter();

  constructor(
    private service: LeaderboardService,
    private router: Router,
    public authService: AppAuthService,
    public layoutService: AppLayoutService,
    private dialog: MatDialog) {
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
      ).subscribe((response: UserStatsResponse) => {
        this.updateData(response);
      });
    }
  }

  isOwner(): boolean {
    const email = this.authService.getUser().email;
    return email === this.owner;
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

  onDelete() {
    this.dialog.open(ModalConfirmComponent, {
      width: '320px'
    }).afterClosed().subscribe((response: boolean) => {
      this.delete.emit(this.group);
    });
  }

  onEdit() {
    this.router.navigateByUrl(`leaderboard/edit/${this.group}`);
  }

  onLeave() {
    this.dialog.open(ModalConfirmComponent, {
      width: '320px'
    }).afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.leave.emit(this.group);
      }
    })
  }
}
