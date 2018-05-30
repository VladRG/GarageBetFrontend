import { Component, OnInit } from '@angular/core';
import { BetService, AppLayoutService } from '@app/core';
import { UserStats } from '@app/models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service: BetService, public layoutService: AppLayoutService) { }


  stats: UserStats;
  ngOnInit() {
    this.service.getStats().subscribe((response: UserStats) => {
      this.stats = response;
    });
  }

  getPercentage(stat: UserStats) {
    return (stat.won * 3 + stat.result) / ((stat.won + stat.result + stat.lost) * 3) * 100;
  }

}
