import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceCatserviceService {
  jwtToken:any;

  private host:string="http://localhost:9595"
  
  constructor(private http: HttpClient, private authService : AuthenticationService) { }

  loadToken() {
   
    this.jwtToken = localStorage.getItem('token');
    
  }
  
 
  getPlacesCat() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    console.log(this.jwtToken)
    return this.http.get(this.host + '/admin/placescat' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  savePlaceCat(PlaceCat:any) {
    console.log(PlaceCat)
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/addplacecat", PlaceCat, {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getPlaceCat(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/placecat/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deletePlaceCat(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/delplacecat/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }


}
