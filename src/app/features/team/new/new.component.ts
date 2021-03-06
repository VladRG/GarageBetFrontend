import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Team } from '@app/models';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-new-team',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewTeamComponent extends ModalFormBase<Team> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, data);
  }

  ngOnInit() { }

}
