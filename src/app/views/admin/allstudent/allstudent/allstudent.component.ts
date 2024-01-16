import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  dataArray:any=[]
  dataStudent={
    id:'',
    firstname:'',
    lastname:'',
    age:0,
    email:'',
    phone:0
  }
  messageSuccess=''
  constructor(private ds:DataService,private route:Router) { 
    this.ds.getAllstudents().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }
  delete(id:any,i:number){
    this.ds.deleteStudent(id).subscribe(response=>{
      // console.log(id)
      // console.log(response)   
      this.dataArray.splice(i,1)
    })
  }
  getdata(id:any,firstname:string,lastname:string,age:number,email:string,phone:number){
    this.messageSuccess=''
    this.dataStudent.firstname=firstname 
    this.dataStudent.lastname=lastname
    this.dataStudent.age=age
    this.dataStudent.email=email
    this.dataStudent.phone=phone
    this.dataStudent.id=id

  }
  updatestudent(f:any){
    let data=f.value
    this.ds.updateStudent(this.dataStudent.id,data).subscribe(response=>{
      console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataStudent.id)
      this.dataArray[indexId].firstname=data.firstname
      this.dataArray[indexId].lastname=data.lastname
      this.dataArray[indexId].age=data.age
      this.dataArray[indexId].email=data.email
      this.dataArray[indexId].phone=data.phone

      this.messageSuccess=`this student ${this.dataArray[indexId].firstname} is updated `

    },(err:HttpErrorResponse)=>console.log(err.message))
  }
  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }
}
