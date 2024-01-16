import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  
  constructor(public aus:AuthuserService,private route:Router) {
  }
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

}
