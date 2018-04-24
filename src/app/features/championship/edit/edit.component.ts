import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Championship } from '@app/models';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-edit-championship',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditChampionshipComponent extends ModalFormBase<Championship> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Championship) {
    super(dialogRef, data);
  }

  ngOnInit() { }
}