import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  adduser() {
    this.router.navigate(['admin/user/add']);
    console.log("fhsdfh")
  }
}
