import { Component, OnInit } from '@angular/core';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ChampionshipService } from '@app/core';
import { ChampionshipModel } from '@app/models';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { NewChampionshipComponent } from '../new/new.component';
import { EditChampionshipComponent } from '@app/features/championship/edit/edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ChampionshipListComponent extends HasLoadingSpinnerBase implements OnInit {

  championships: Array<ChampionshipModel> = [];

  constructor(
    private service: ChampionshipService,
    public dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetch.bind(this))
      .subscribe((data: Array<ChampionshipModel>) => {
        this.championships = data;
      });
  }

  fetch(): Observable<Array<ChampionshipModel>> {
    return this.service.get();
  }

  create() {
    const createDialog = this.dialog.open(NewChampionshipComponent, {
      width: '420px',
      height: '60%'
    });

    createDialog.afterClosed().subscribe((data: ChampionshipModel) => {
      if (data) {
        this.service.add(data)
          .subscribe((response) => this.ngOnInit());
      }
    });
  }

  edit(championship: ChampionshipModel) {
    const editDialog = this.dialog.open(EditChampionshipComponent, {
      width: '420px',
      height: '60%',
      data: Object.assign({}, championship)
    });

    editDialog.afterClosed().subscribe((data: ChampionshipModel) => {
      if (data) {
        this.service.update(data)
          .subscribe((response) => this.ngOnInit());
      }
    });
  }
}
