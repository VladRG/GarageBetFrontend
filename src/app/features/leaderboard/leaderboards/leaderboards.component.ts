import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '@app/core';
import { LeaderboardInvite } from '@app/models';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  constructor(private service: LeaderboardService) { }

  currentGroup = 0;
  invites: Array<LeaderboardInvite> = [];
  groups: Array<any> = [];

  ngOnInit() {
    this.service.getPendingInvites().subscribe((response: Array<LeaderboardInvite>) => {
      this.invites = response;
    });
  }

  checkSelected(group: number): boolean {
    return this.currentGroup === group;
  }
}
