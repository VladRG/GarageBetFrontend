import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChampionshipModel } from '@app/models';
import { ModalFormBase } from '@app/shared';

@Component({
  selector: 'app-edit-championship',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditChampionshipComponent extends ModalFormBase<ChampionshipModel> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChampionshipModel) {
    super(dialogRef, data);
  }

  ngOnInit() { }
}
