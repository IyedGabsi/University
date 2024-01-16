import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  messageErr:any
  datatoken:any
  constructor(private aus:AuthuserService, private route:Router) { }

  ngOnInit(): void {
  }
  login(f:any){
    let data=f.value
    this.aus.login(data).subscribe(data=>{
      this.datatoken=data
      this.aus.Savetoken(this.datatoken.token)
      this.route.navigate(['/students'])
      //  this.messageErr=data 
    },(err:HttpErrorResponse)=>this.messageErr=err.error.error)
  }

}
