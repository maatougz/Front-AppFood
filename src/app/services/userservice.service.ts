import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  host:string="http://localhost:9595";
  username :string='';
  jwtToken:any;

  
  constructor(private http: HttpClient, private authService : AuthenticationService) {}


  
 loadToken() {
   
  this.jwtToken = localStorage.getItem('token');
  
}

getTokenInfo(){
  let jwtHelper = new JwtHelperService();
  this.username=jwtHelper.decodeToken(this.jwtToken).sub;
 
}

  saveUser(user:any): Observable<any> {
    console.log(user)
    return this.http.post(this.host + "/visitor/register", user)
    .pipe(map(resp=>resp));
  }

  

  uploadFile( file: File) : Observable<any>  
  {  
    console.log(file)
    return this.http.post(this.host + "/user/image", file,  {headers : new HttpHeaders({'Authorization' : this.jwtToken})});  
  } 

  getUsers() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/users' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  getUsersUser() {
    
    return this.http.get(this.host + '/visitor/users' )
    
  }

  getUser(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/user/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getUserByUsername(username:string) {
    username=this.username;
    console.log(username);
    return this.http.get("http://localhost:9595/user/profile/" + username, {headers: new HttpHeaders({'Authorization':this.jwtToken})})
    .pipe(map(resp=>resp)); 
    }

    /********* admin *********/
    getUserByUsernameAdmin(username:string) {
      username=this.username;
      console.log(username);
      return this.http.get("http://localhost:9595/Admin/profile/" + username, {headers: new HttpHeaders({'Authorization':this.jwtToken})})
      .pipe(map(resp=>resp)); 
      }
  deleteUsers(id:number) {
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.delete(this.host + '/admin/deluser/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  updateUser(id:number, user:any){
    console.log(id, user);
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.put(this.host + '/admin/upduser/'+id, user , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  /* *********role******* */

  getRoles() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/roles' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteRole(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/delrole/'+id , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
    
  }

  saveRole(role:any): Observable<any> {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/addrole", role, {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
    
  }



  /* *********visitor contact******* */


  saveContact(name:string,email:string,subject:string,message:string): Observable<any>{
    let params = new HttpParams()
    .set('email', email)
    .set('message', message)
    .set('subject', subject) 
    .set('name', name);
    console.log(params)
    return this.http.get(this.host + '/visitor/contact', {params});
    
  }
}
