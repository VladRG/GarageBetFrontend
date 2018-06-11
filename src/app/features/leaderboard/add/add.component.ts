import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel, Leaderboard } from '@app/models';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppAuthService, LeaderboardService } from '@app/core';
import { MatDialog, MatAutocompleteSelectedEvent } from '@angular/material';
import { ModalConfirmComponent } from '@app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddLeaderboardComponent implements OnInit {

  userCtrl: FormControl;
  filteredUsers: Observable<Array<UserModel>>;
  users: Array<UserModel> = [];
  allUsers: Array<UserModel> = [];
  leaderboard: Leaderboard = new Leaderboard();

  constructor(
    private userService: AppAuthService,
    private service: LeaderboardService,
    private route: ActivatedRoute,
    private dialog: MatDialog) {
    this.userCtrl = new FormControl();
    this.route.params.subscribe(params => {
      if (params.group) {
        this.service.getLeaderboardForEdit(params.group)
          .subscribe((response: Leaderboard) => {
            this.leaderboard = response;
          })
      }
    })
    this.filteredUsers = this.userCtrl.valueChanges
      .pipe(
        startWith(''),
        map(searchWord => searchWord ? this.filterUsers(searchWord) : this.users.slice())
      );
  }

  filterUsers(searchWord: string): Array<UserModel> {
    if (typeof searchWord === 'string') {
      return this.users.filter(user =>
        user.firstName.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 ||
        user.lastName.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
      );
    }
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((response: Array<UserModel>) => {
      this.users = response.slice();
      this.allUsers = response.slice();
    });
  }

  addLeaderboard() {
    this.dialog.open(ModalConfirmComponent, {
      width: '260px'
    }).afterClosed().subscribe((response: boolean) => {
      if (response) {
        if (this.leaderboard.id && this.leaderboard.id > 0) {
          this.service.update(this.leaderboard).subscribe();
        } else {
          this.service.add(this.leaderboard).subscribe();
        }
      }
    });
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.leaderboard.users.push(event.option.value);
    const index = this.users.indexOf(this.users.filter(user => user.email === event.option.value.email)[0]);
    this.users.splice(index, 1);
    this.userCtrl.reset();
  }

  remove(user: UserModel) {
    const index = this.leaderboard.users.indexOf(this.leaderboard.users.filter(u => u.email === user.email)[0]);
    this.leaderboard.users.splice(index, 1);
    this.users.push(user);
  }
}
