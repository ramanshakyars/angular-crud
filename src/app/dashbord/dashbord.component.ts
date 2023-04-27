import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EditComponent } from '../edit/edit.component';
import { CrudService } from '../crud.service';
import { FormControl } from '@angular/forms';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
[x: string]: any;
Rupees:any="--Rs"
 

  allusers: any = [];
  filterControl=new FormControl
  filteredList: any=[]; 
// background: any;

  constructor(private dialog: MatDialog, private service: CrudService, ) { }
  ngOnInit(): void {
    this.getAllData();
    this.onFilter();

    
  }

  getAllData() {
    this.service.loadData().subscribe((allUsers: any) => {
      this.allusers=[]
      this.allusers = allUsers
      this.filteredList=[]
      this.filteredList=this.allusers
      
    })
  }

  openDialog()
   {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
       
      },
      disableClose: true
    }
      )
dialogRef.afterClosed().subscribe((result)=>{
  this.getAllData()
})
  }

  
  // deleteData(id: number) {
  //   this.service.deleteUserData(id).subscribe({
  //     next: () => {
  //       this.getAllData()
  //     },
  //     error: () => {
  //       alert('error on delete')
  //     }
  //   })
  // }

  openEditDialog(action:string , editData:any){
   const dialogRef =  this.dialog.open(EditComponent,  {
    data:{
      action: action,
      editData: editData
    },
    disableClose: true
  
  })
   
  dialogRef.afterClosed().subscribe((result)=>{
    if(action === 'edit' && result!= null){
      result.id= editData.id
      this.service.updateData(result).subscribe((res)=>{
       this.getAllData()
      })
    }
      
  })
    }

    onFilter(){
      this.filterControl.valueChanges.subscribe((res)=>{
        if(res!=''){
          this.filteredList=this.allusers.filter((ele:any)=>
          ele.name.toLowerCase().includes(res.toLowerCase())
          );
        }
        else{
          this.filteredList=this.allusers;
        }
      })
    }
    opentDialog(enterAnimationDuration: string, exitAnimationDuration: string, id:number): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
      dialogRef.afterClosed().subscribe((result)=>{
        if(result){
          this.service.deleteUserData(id).subscribe(()=> this.getAllData())
        }
      })

    }
  }
   
  


    
  
  



