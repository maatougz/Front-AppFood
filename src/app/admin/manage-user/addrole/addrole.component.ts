import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  savedRole: any;
  constructor(private userservice : UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveRole(role:any){
    this.userservice.loadToken();
    this.userservice.saveRole(role)
        .subscribe(data => {
          this.savedRole=data
          this.router.navigate(['admin/user/listrole'])
          console.log(this.savedRole);
        }, error => {
          console.log(error);
        });
  }
}
