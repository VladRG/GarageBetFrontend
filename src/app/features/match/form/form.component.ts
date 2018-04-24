import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeamService, MatchService } from '@app/core';
import { Championship, Team, Match } from '@app/models';
import { HasLoadingSpinnerBase } from '@app/shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-match-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class MatchFormComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  championship: Championship;

  @Input()
  isClosingMatch = false;

  @Input()
  match: Match;

  @Output()
  onSave: EventEmitter<Match> = new EventEmitter();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter();

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

  save() {
    this.onSave.emit(this.match);
  }

  cancel() {
    this.onCancel.emit();
  }

}
