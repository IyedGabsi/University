import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class GuarduserGuard implements CanActivateChild {
  constructor(private aus:AuthuserService,private route:Router){

  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        if(this.aus.userloggedin()==true){
          resolve(true) 
        }else{
          this.route.navigate(['/login'])
          localStorage.removeItem('token')
          resolve(false)
        }
      })
  }
  
}
