import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-unavbar',
  templateUrl: './unavbar.component.html',
  styleUrls: ['./unavbar.component.css']
})
export class UnavbarComponent implements OnInit {

  currentUser:any={};
  username:any;
  isAdminAtr: boolean=false;
  isUserAtr: boolean=false;

  constructor(private authService: AuthenticationService, private userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    
    
    this.getCurrentUserNavbar();
  }
  
  isAdmin(){
    return this.authService.isAdmin();
  }

  public isUser() {
    console.log(this.isUser())
    return this.isUserAtr;
  }

  isAuthenticated(){
    console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated().length > 0;
     
  }

  getCurrentUserNavbar() {
    this.userService.loadToken();
    this.userService.getTokenInfo()
    this.userService.getUserByUsername(this.username)
    .subscribe(data=>{
      this.currentUser=data;
      console.log(data);
  },err=>{
    console.log(err);
  })
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
