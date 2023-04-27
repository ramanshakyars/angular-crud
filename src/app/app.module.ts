import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import { EditComponent } from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ConfirmComponent } from './confirm/confirm.component';



 





@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    DialogComponent,
    EditComponent,
    ConfirmComponent
  ],
  imports: [
    MatFormFieldModule,
    MatTooltipModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
