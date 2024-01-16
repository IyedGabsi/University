import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headeradmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','admin')

  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)



  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) {}


  getAllstudents(){
    return this.http.get(environment.urlBackend+'students',{headers:this.headerall,params:this.params})
  }
  addStudent(profile:any){
    return this.http.post(environment.urlBackend+'addstudent',profile,{headers:this.headeradmin,params:this.params})
  }
  deleteStudent(id:any){
    return this.http.delete(environment.urlBackend+'student/'+id,{headers:this.headeradmin,params:this.params})
  }
  updateStudent(id:any,newprofile:any){
    return this.http.patch(environment.urlBackend+'student/'+id,newprofile,{headers:this.headeradmin,params:this.params})
  }
  getstudent(id:any){
    return this.http.get(environment.urlBackend+'student/'+id,{headers:this.headerall,params:this.params})
  }
}
