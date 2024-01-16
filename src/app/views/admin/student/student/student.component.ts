import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''
  constructor(private ds:DataService,private route:ActivatedRoute) {
    this.route.params.subscribe(data=>this.id=data.id)
    this.ds.getstudent(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>this.messageErr=err.message)
   }

  ngOnInit(): void {
  }

}
