import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdish',
  templateUrl: './listdish.component.html',
  styleUrls: ['./listdish.component.css']
})
export class ListdishComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  adddish() {
    this.router.navigate(['admin/dish/add']);
  }

  upddish() {
    this.router.navigate(['admin/dish/upd']);
  }
}
