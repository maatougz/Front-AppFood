import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveData } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Placecategory } from '../models/placecategory';
import { Restos } from '../models/restos';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  jwtToken:any;

  private host:string="http://localhost:9595";
  
  constructor(private http: HttpClient) { }

  loadToken() {
    this.jwtToken=localStorage.getItem('token');
  }
  
  getrestobybrand(id:any){
    
    return this.http.get(this.host + '/visitor/restos/'+id )
    
  }

  getRestosUser() {
    
    return this.http.get(this.host + '/visitor/restos')
    
  }

  getSearchResto(search:string){
    if(this.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/user/searchResto/'+search , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }


  getADSearchResto(price:string,location:string,dishname:string){
    if(this.jwtToken === null) this.loadToken();
    let params = new HttpParams()
    .set('price', price)
    .set('location', location) 
    .set('dishname', dishname);
    return this.http.get(this.host + '/user/advancedResto',  {headers : new HttpHeaders({'Authorization' : this.jwtToken}),params})
    .pipe(map(resp=>resp));
  }


  /*   admin     */

  getRestos() {
    console.log(this.jwtToken)
    if(this.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/admin/restos', {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  getResto(id:any){
    if(this.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/admin/resto/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  saveResto(resto:Restos){
    console.log(resto);
    if(this.jwtToken === null) this.loadToken();
    return this.http.post(this.host + "/admin/addresto", resto, {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteRestos(id:number) {
    if(this.jwtToken === null) this.loadToken();
    return this.http.delete(this.host + '/admin/delresto/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  updateResto(id:number, resto:any){
    console.log(id, resto);
    if(this.jwtToken === null) this.loadToken();
    return this.http.put(this.host + '/admin/updresto/'+id, resto , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
}
