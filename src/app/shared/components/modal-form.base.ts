import { MatDialogRef } from "@angular/material";

export class ModalFormBase<T> {
  private dialogReference: MatDialogRef<any>;
  constructor(
    dialog: MatDialogRef<any>,
    public model: T
  ) {
    this.dialogReference = dialog;
  }

  cancel() {
    this.dialogReference.close();
  }

  save(result: T) {
    this.dialogReference.close(result);
  }
}
