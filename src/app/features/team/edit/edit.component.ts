import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team } from '@app/models';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTeamComponent extends ModalFormBase<Team> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team) {
    super(dialogRef, data);
  }

  ngOnInit() { }

}
