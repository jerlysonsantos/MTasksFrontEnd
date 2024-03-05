import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILabor } from '../interfaces/labor.interface';

@Component({
  selector: 'app-labor-dialog',
  templateUrl: './labor-dialog.component.html',
  styleUrls: ['./labor-dialog.component.scss'],
})
export class LaborDialogComponent implements OnInit {
  laborForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    @Inject(MatDialogRef)
    public dialogRef: MatDialogRef<LaborDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILabor
  ) {
    this.laborForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.data) {
      this.laborForm.patchValue(this.data);
    }
  }

  onSubmit(): void {
    if (this.laborForm.invalid) {
      return;
    }

    this.dialogRef.close(this.laborForm.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
