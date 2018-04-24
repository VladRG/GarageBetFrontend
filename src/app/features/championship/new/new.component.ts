import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Championship } from '@app/models';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-new-championship',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewChampionshipComponent extends ModalFormBase<Championship> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, data);
  }

  ngOnInit() { }
}
