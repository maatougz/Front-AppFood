import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class BrandserviceService {

  jwtToken:any;
  host:string="http://localhost:9595";

  constructor(private http: HttpClient, private authService : AuthenticationService) { }

  loadToken() {
   
    this.jwtToken = localStorage.getItem('token');
    
  }

  uploadFile( image: any) : Observable<any>  
  {  

    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/image", image , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  } 
  

  saveBrand(brand:any) : Observable<any>{
    console.log(brand)
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.post(this.host + "/admin/brand", brand , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getBrands() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/brands' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getBrandsUser() {
    
    return this.http.get(this.host + '/visitor/brands')
    
  }
  getBrand(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/brand/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteBrand(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/delbrand/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }


  updateBrand(id:number, brand:any){
    console.log(id, brand);
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.put(this.host + '/admin/updbrand/'+id, brand , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
}
