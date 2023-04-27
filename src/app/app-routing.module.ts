import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'dialog',component:DialogComponent},
  {path:'edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
