import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel, Leaderboard } from '@app/models';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppAuthService, LeaderboardService } from '@app/core';
import { MatDialog } from '@angular/material';
import { ModalConfirmComponent } from '@app/shared';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddLeaderboardComponent implements OnInit {

  userCtrl: FormControl;
  filteredUsers: Observable<Array<UserModel>>;
  users: Array<UserModel> = [];
  leaderboard: Leaderboard = new Leaderboard();

  constructor(
    private userService: AppAuthService,
    private service: LeaderboardService,
    private dialog: MatDialog) {
    this.userCtrl = new FormControl();
    this.filteredUsers = this.userCtrl.valueChanges
      .pipe(
        startWith(''),
        map(searchWord => searchWord ? this.filterUsers(searchWord) : this.users.slice())
      );
  }

  filterUsers(searchWord: string): Array<UserModel> {
    return this.users.filter(user =>
      user.firstName.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 ||
      user.lastName.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
    );
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((response: Array<UserModel>) => {
      this.users = response;
    });
  }

  addLeaderboard() {
    this.dialog.open(ModalConfirmComponent, {
      width: '260px'
    }).afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.service.add(this.leaderboard);
      }
    });
  }
}
