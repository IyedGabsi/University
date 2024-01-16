import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  id:any 
  
  studentdata:any 
  constructor(private ds:DataService, private acroute:ActivatedRoute) {
    this.acroute.params.subscribe(data=>this.id=data.id)
    
   }

  ngOnInit(): void {
    this.ds.getstudent(this.id).subscribe(data=>this.studentdata=data)
  }
  // details(id:any){
  //   this.ds.getstudent(id).
  // }

}
