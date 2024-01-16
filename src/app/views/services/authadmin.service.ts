import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  profileAdmin={
    username:'',
    role:''
  }
  
  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }
  login(auth:any){
    return this.http.post(environment.urlBackend+'admin/login',auth)
  }
  Saveauth(token:any){
    // let decodetoken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)
    

  }
  getauthdata(){
    let token:any=localStorage.getItem('token')
    let decodetoken=this.helper.decodeToken(token)
    return decodetoken.username
  }
  loggedin(){
    let token:any=localStorage.getItem('token')
   
    
    if(!token){
      return false
    }
     let decodeToken=this.helper.decodeToken(token)
     if(decodeToken.role!=='admin'){
      return false
     }
     if(this.helper.isTokenExpired(token)){
      return false 
     }
     return true
      
  }
  logout(){
    localStorage.removeItem('token')
    
  }
}
