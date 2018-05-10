import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TeamModel, ChampionshipModel } from '@app/models';
import { ChampionshipService, TeamService } from '@app/core';
import { HasLoadingSpinnerBase } from '@app/shared';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-championship-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ChampionshipFormComponent extends HasLoadingSpinnerBase implements OnInit {

  @Input()
  championship: ChampionshipModel;

  @Output()
  save: EventEmitter<ChampionshipModel> = new EventEmitter();

  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter();

  teams: Array<TeamModel> = [];
  availableTeams: Array<TeamModel> = [];

  constructor(
    private service: ChampionshipService,
    private teamService: TeamService
  ) {
    super();
  }

  ngOnInit() {
    if (!this.championship) {
      this.championship = new ChampionshipModel();
    }

    this.wrapObservableWithSpinner(this.teamService.getForSelect())
      .subscribe((data: Array<TeamModel>) => {
        this.teams = data;
        this.filterTeams();
      });
  }

  onTeamSelected(event: MatSelectChange) {
    const team = event.value as TeamModel;
    const index = this.availableTeams.indexOf(team);
    this.availableTeams.splice(index, 1);
    this.championship.teams.push(event.value);
    this.sortTeams();
  }

  removeTeam(team: TeamModel) {
    const index = this.championship.teams.indexOf(team);
    this.championship.teams.splice(index, 1);
    this.availableTeams.push(team);
    this.sortTeams();
  }

  onSave() {
    this.save.emit(this.championship);
  }

  onCancel() {
    this.cancel.emit(true);
  }

  private filterTeams() {
    this.availableTeams = [];
    this.teams.forEach(team => {
      const existingTeams = this.championship.teams
        .filter(existingTeam => existingTeam.id === team.id);
      if (existingTeams.length === 0) {
        this.availableTeams.push(team);
      }
    });
  }

  private sortTeams() {
    this.availableTeams.sort(this.sortByNameProperty);
    this.championship.teams.sort(this.sortByNameProperty);
  }

  private sortByNameProperty(a, b): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}
