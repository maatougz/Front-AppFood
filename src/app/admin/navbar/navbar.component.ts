import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any={};
  username:any;

  constructor(private authService:AuthenticationService, private userService: UserserviceService , private router:Router) { }

  ngOnInit(): void {
    this.getCurrentUserNavbar();
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
