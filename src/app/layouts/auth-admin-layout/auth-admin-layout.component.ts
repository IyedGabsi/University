import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
  dataReceived:any
  url:any 
  messageErr:any 
  constructor(private as:AuthadminService,private route:Router,private acroute:ActivatedRoute) {
    if(this.as.loggedin()==true){
      this.route.navigate(['/admin'])
    }
   }

  ngOnInit(): void {
    this.url=this.acroute.snapshot.queryParams['returnUrl'] || '/admin/'
  
  }
  loginadmin(f:any){
    let data=f.value
    this.as.login(data).subscribe(response=>{
      this.dataReceived=response
      this.as.Saveauth(this.dataReceived.token)
      this.route.navigate([this.url])
    },err=>this.messageErr='invalid email or password!')
  }

}
