import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeamService, MatchService } from '@app/core';
import { Championship, Team, Match } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';
import { Observable } from 'rxjs';
import { dateTimeToDate } from '@app/utils';

@Component({
  selector: 'app-match-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class MatchFormComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  championshipId: number;

  @Input()
  isClosingMatch = false;

  @Input()
  match: Match;

  @Output()
  onSave: EventEmitter<Match> = new EventEmitter();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter();

  time = '';
  teams: Array<Team> = [];

  constructor(
    private service: MatchService,
    private teamService: TeamService
  ) {
    super();
  }


  ngOnInit() {
    this.wrapObservableWithSpinner(this.teamService.getForChampionship(this.championshipId))
      .subscribe((data: Array<Team>) => {
        this.teams = data;
      }, error => console.error);
  }

  fetchTeams(): Observable<Array<Team>> {
    return this.teamService.getForChampionship(this.championshipId);
  }

  save() {
    this.match.dateTime = dateTimeToDate(this.match.dateTime, this.time);
    this.onSave.emit(this.match);
  }

  cancel() {
    this.onCancel.emit();
  }
}
