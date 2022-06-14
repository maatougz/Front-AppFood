import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbrand',
  templateUrl: './listbrand.component.html',
  styleUrls: ['./listbrand.component.css']
})
export class ListbrandComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addbrand() {
    this.router.navigate(['admin/brand/add']);
  }

  updbrand() {
    this.router.navigate(['admin/brand/upd']);
  }
}
