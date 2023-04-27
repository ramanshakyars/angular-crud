import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public updateForm: any = FormGroup

  constructor(private formbuilder: FormBuilder, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: CrudService
  ) {
    this.initialForm()
  }

  ngOnInit(): void {

    if (this.data.action === 'edit') {
      this.updateForm.patchValue(this.data.editData)


    }

  }

  initialForm() {
    this.updateForm = this.formbuilder.group({
      name: [],
      money: [],
      mobile: []

    })

  }

  updateUserData() {
    this.dialogRef.close(this.updateForm.value)
  }
  onCancel() {
    this.dialogRef.close()
  }

}
