import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Championship } from '@app/models';
import { CancellableBase } from '@app/shared';

@Component({
  selector: 'app-edit-championship',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditChampionshipComponent extends CancellableBase implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Championship) {
    super(dialogRef);
  }

  ngOnInit() { }

  save(championship: Championship) {
    this.dialogRef.close(championship);
  }

  cancel() {
    this.dialogRef.close();
  }
}
