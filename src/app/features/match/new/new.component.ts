import { Component, OnInit, Inject } from '@angular/core';
import { Match } from '@app/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-new-match',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewMatchComponent extends ModalFormBase<Match> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, data);
  }

  ngOnInit() { }
}
