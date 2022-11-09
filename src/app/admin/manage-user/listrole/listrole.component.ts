import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class ListroleComponent implements OnInit {

  roles:any;

  constructor(private router : Router, private userservice : UserserviceService) { }

  ngOnInit(): void {
    this.userservice.loadToken();
    this.userservice.getRoles().subscribe(data=>{
      this.roles=data
    }, error => {
      console.log(error)
    });
  }

  addrole() {
    this.router.navigate(['admin/user/addrole']);
  }

  delrole(id:any) {
    
    this.userservice.deleteRole(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.userservice.getRoles(); 
      }
    )
    window.location.reload();
  }
}
