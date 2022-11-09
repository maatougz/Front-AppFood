import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DishCatserviceService {
  jwtToken: any;
  
  private host:string="http://localhost:9595"

  constructor(private http: HttpClient, private authService : AuthenticationService) { }

  loadToken() {
    this.jwtToken=localStorage.getItem('token');
  }


  getDishesCat() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/dishescat' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getDishesCatUser() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/user/dishescat' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getDishCat(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/dishcat/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  saveDishCat(DishCat:any) {
    console.log(DishCat)
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/adddishcat", DishCat, {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteDishCat(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/deldishcat/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
}
