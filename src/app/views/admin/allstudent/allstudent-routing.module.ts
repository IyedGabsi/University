import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentComponent } from './allstudent/allstudent.component';

const routes: Routes = [
  {path:'',component:AllstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllstudentRoutingModule { }
