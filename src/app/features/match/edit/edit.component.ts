import { Component, OnInit, Inject } from '@angular/core';
import { Match } from '@app/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditMatchComponent extends ModalFormBase<Match> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Match) {
    super(dialogRef, data);
  }

  ngOnInit() { }
}
