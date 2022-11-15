import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DishserviceService {
  host:string="http://localhost:9595";
  jwtToken:any;

  constructor(private http: HttpClient, private authService : AuthenticationService) { }

  loadToken() {
    this.jwtToken=localStorage.getItem('token');
  }
  
  saveDish(dish:any)  {
    console.log(dish)
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/adddish", dish, {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getDishes() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/dishes' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getDish(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/dish/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteDish(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/deldish/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  updateDish(id:number, dish:any){
    console.log(id, dish);
    return this.http.put(this.host + '/admin/upddish/'+id, dish , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }



  getdishbyresto(id:any){
    
    return this.http.get(this.host + '/visitor/menu/'+id )
    
  }
  
}
