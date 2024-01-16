import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  messageErr=""
  constructor(private ds:DataService,private route:Router) {
    
   }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
    this.ds.addStudent(data).subscribe(data=>{
      
      this.route.navigate(['/admin/allstudent'])
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })
  }
}
