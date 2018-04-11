import { MatDialogRef } from "@angular/material";

export class CancellableBase {
  private dialogReference: MatDialogRef<any>;
  constructor(dialog: MatDialogRef<any>) {
    this.dialogReference = dialog;
  }

  cancel() {
    this.dialogReference.close();
  }
}
