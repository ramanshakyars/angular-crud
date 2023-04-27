import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DashbordComponent } from '../dashbord/dashbord.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public userForm!: FormGroup;
  
  


  constructor(private service: CrudService, private formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>) {
  }
  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: [],
      money: [],
      mobile: []
    })
  }

  postUserData() {
    this.service.postData(this.userForm.value).subscribe(res => {
      this.dialogRef.close(this.userForm.value)

    })
    




  }
}

