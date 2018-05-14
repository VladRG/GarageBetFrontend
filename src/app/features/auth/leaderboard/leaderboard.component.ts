import { Component, OnInit } from '@angular/core';
import { BetService, AppAuthService } from '@app/core';
import { UserStats } from '@app/models';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private service: BetService, private authService: AppAuthService) { }

  stats: Array<UserStats> = [];
  userEmail = '';

  ngOnInit() {
    this.userEmail = this.authService.getUser().email;
    this.service.getLeaderboard().subscribe((response: Array<UserStats>) => {
      this.stats = response;
    });
  }

  getPercentage(stat: UserStats) {
    return (stat.won * 3 + stat.result) / ((stat.won + stat.result + stat.lost) * 3) * 100;
  }
}
