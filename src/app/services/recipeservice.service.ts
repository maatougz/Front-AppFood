import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {

  host:string="http://localhost:9595";

  jwtToken:any;

  constructor(private http: HttpClient, private authService : AuthenticationService) { }


  loadToken() {
    this.jwtToken=localStorage.getItem('token');
  }


  saveRecipe(recipe:any): Observable<any> {
    console.log(recipe)
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.post(this.host + "/user/addrecipe", recipe, {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  getRecipesUser(){
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/user/recipes', {headers : new HttpHeaders({'Authorization' : this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  
  getRecipeuser(id:any){
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/user/recipe/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  

  /*admin */

  deleteRecipe(id:number) {
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.delete(this.host + '/admin/delrecipe/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
  getRecipes() {
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/admin/recipes', {headers : new HttpHeaders({'Authorization' : this.jwtToken})});
  }

  getRecipe(id:any){
    if(this.authService.jwtToken === null) this.loadToken();
    return this.http.get(this.host + '/admin/recipe/'+id , {headers: new HttpHeaders({'Authorization': this.jwtToken})})
    .pipe(map(resp=>resp));
  }
}
