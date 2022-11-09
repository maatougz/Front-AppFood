import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {
 review:any;
  host:string="http://localhost:9595";

  jwtToken:any;
  constructor(private http: HttpClient, private authService : AuthenticationService) { }

  
  loadToken() {
    this.jwtToken=localStorage.getItem('token');
  }

  getReviews() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/reviews' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getReview(id:any){
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/admin/review/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  deleteReview(id:number) {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.delete(this.host + '/admin/delreview/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  /*  user */

  saveReview(review:any,id:number): Observable<any>{
    console.log(review)
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.post(this.host + "/user/addreview/"+id, review, {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  getReviewsUser() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/user/reviews' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }

  getReviewsindex() {
    if(this.authService.jwtToken === null) this.authService.loadToken();
    return this.http.get(this.host + '/user/reviewsindex' , {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
}
