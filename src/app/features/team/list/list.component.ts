import { Component, OnInit } from '@angular/core';
import { TeamService } from '@app/core';
import { HasLoadingSpinnerBase } from '@app/shared';
import { Team } from '@app/models';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { NewTeamComponent } from '@app/features/team/new/new.component';
import { EditTeamComponent } from '@app/features/team/edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TeamListComponent extends HasLoadingSpinnerBase implements OnInit {

  teams: Array<Team> = [];
  constructor(
    private service: TeamService,
    public dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetch.bind(this))
      .subscribe((data: Array<Team>) => {
        this.teams = data;
      }, error => {
        console.log(error);
      })
  }

  fetch(): Observable<Array<Team>> {
    return this.service.get();
  }

  create() {
    const createDialog = this.dialog.open(NewTeamComponent, {
      width: '420px',
      height: '60%'
    });

    createDialog.afterClosed().subscribe((team: Team) => {
      if (team) {
        this.service.add(team)
          .subscribe((response) => this.ngOnInit())
      } else {
        this.ngOnInit();
      }
    });
  }

  edit(team: Team) {
    const editDialog = this.dialog.open(EditTeamComponent, {
      width: '420px',
      height: '60%',
      data: Object.assign({}, team)
    });

    editDialog.afterClosed().subscribe((team: Team) => {
      if (team) {
        this.service.update(team)
          .subscribe(
            (response) => this.ngOnInit(),
            error => console.log()
          );
      }
    });
  }
}
