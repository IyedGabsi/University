import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    AddstudentRoutingModule,
    FormsModule
  ]
})
export class AddstudentModule { }
