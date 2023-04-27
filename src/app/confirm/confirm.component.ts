import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  allusers: any = [];
  user:any=[];

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>){

  }

  deleteData() {
    this.dialogRef.close(true);

  }

  
}
