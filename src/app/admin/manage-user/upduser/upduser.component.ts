import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-upduser',
  templateUrl: './upduser.component.html',
  styleUrls: ['./upduser.component.css']
})
export class UpduserComponent implements OnInit {

  user:any={};
  id:number;
  constructor(private router : Router, private userservice : UserserviceService,private activatedRoute:ActivatedRoute) { 
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userservice.getUser(this.id)
    .subscribe(data=>{
      this.user=data;
      console.log(data);
  },err=>{
    console.log(err);
  })
  }

  updateUser() {
    this.userservice.updateUser(this.id,this.user)
        .subscribe(data=>{
          console.log(data);
          alert("success update")
          this.router.navigate(['admin/user/list'])
        },err=>{
          console.log(err);
          alert("fail update")
        }); 
    }
}
