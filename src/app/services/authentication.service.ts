import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host:string="http://localhost:9595";
  jwtToken:any;
  username: string='';
  roles:Array<any> = [];
  

  constructor(private http:HttpClient) { }

  login(user:User) {
    return this.http.post(this.host+"/login", user, { observe:"response"} );

  }

  logout() {
    
    localStorage.removeItem('token');
    this.jwtToken='';
    this.username = '';
    //this.usernameAuth=null;
    this.roles = [];
    
  }

  isAdmin() {
    /**
		 * roles dans le jwt de la forme
		 * {
		 *   "sub": "admin",
		 *   "exp": 1568027984,
		 *   "roles": [
		 *     {
		 *       "authority": "ADMIN"
		 *     },
		 *     {
		 *       "authority": "USER"
		 *     }
		 *   ]
		 * }
		 */
    for(let r of this.roles) {
      if(r.authority=='ADMIN') return true;
    }
    return false ;
  }

  isUser() {
    /**
		 * roles dans le jwt de la forme
		 * {
		 *   "sub": "admin",
		 *   "exp": 1568027984,
		 *   "roles": [
		 *     {
		 *       "authority": "ADMIN"
		 *     },
		 *     {
		 *       "authority": "USER"
		 *     }
		 *   ]
		 * }
		 */
    for(let r of this.roles) {
      if(r.authority=='USER') return true;
    }
    return false;
  }


  isAuthenticated() {
    return this.roles ;
  }

  saveToken(jwt:string) {
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles; 
    this.username=jwtHelper.decodeToken(this.jwtToken).sub;
  }

  loadToken() {
    this.jwtToken=localStorage.getItem('token');
    this.saveToken(this.jwtToken)
  }


  getBrands() {
    if(this.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/admin/brands' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

}
