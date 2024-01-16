import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstudentRoutingModule } from './allstudent-routing.module';
import { AllstudentComponent } from './allstudent/allstudent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllstudentComponent
  ],
  imports: [
    CommonModule,
    AllstudentRoutingModule,
    FormsModule
    
  ]
})
export class AllstudentModule { }
