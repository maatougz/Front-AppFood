import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listplace-cat',
  templateUrl: './listplace-cat.component.html',
  styleUrls: ['./listplace-cat.component.css']
})
export class ListplaceCatComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addplacecat() {
    this.router.navigate(['admin/placecat/add']);
  }

  updplacecat() {
    this.router.navigate(['admin/placecat/upd']);
  }
}
