import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})

export class ListuserComponent implements OnInit {

  reader = new FileReader();
  users:any;

  user=new User();
  myImage :any;
  

  constructor(private router : Router, private userService : UserserviceService) { }

  ngOnInit(): void {

    this.userService.loadToken();
    this.userService.getUsers()
			.subscribe(data => {
				this.users = data;
        console.log(this.users)
        console.log(this.users[0].id) 
        
			}, error => {
				console.log(error)
			});
      
  }


  adduser() {
    this.router.navigate(['admin/user/add']);
  }

  onEditUser(id:string) {
    this.router.navigate(['admin/user/upd',id]);
  }
  deluser(id:any) {
    
    this.userService.deleteUsers(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.userService.getUsers(); 
      }
    )
    window.location.reload();
  }
}
