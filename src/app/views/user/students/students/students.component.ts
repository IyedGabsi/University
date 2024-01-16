import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  datastudents:any
  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllstudents().subscribe(data=>this.datastudents=data)
  }

  ngOnInit(): void {
  }
  godetails(id:any){
    this.route.navigate(['studentdetails/'+id])
  }

}
