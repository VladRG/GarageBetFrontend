import { Component, OnInit, Input } from '@angular/core';
import { TeamService, MatchService } from '@app/core';
import { Championship, Team } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class MatchFormComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  championship: Championship;

  teams: Array<Team> = [];

  constructor(
    private service: MatchService,
    private teamService: TeamService
  ) {
    super();
  }


  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetchTeams.bind(this))
      .subscribe((data: Array<Team>) => {
        this.teams = data;
      }, error => console.error);
  }

  fetchTeams(): Observable<Array<Team>> {
    return this.teamService.getForChampionship(this.championship.id)
  }

}
