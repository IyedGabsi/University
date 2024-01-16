import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }
  register(body:any){
    return this.http.post(environment.urlBackend+'register',body)
  }
  login(auth:any){
    return this.http.post(environment.urlBackend+'login',auth)
  }
  Savetoken(token:any){
    
    localStorage.setItem('token',token)
    

  }
  userloggedin(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken=this.helper.decodeToken(token)
     if(decodeToken.role){
      return false
     }
     if(this.helper.isTokenExpired(token)){
      return false 
     }
     return true
  }
}
