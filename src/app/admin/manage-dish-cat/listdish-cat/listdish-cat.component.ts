import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdish-cat',
  templateUrl: './listdish-cat.component.html',
  styleUrls: ['./listdish-cat.component.css']
})
export class ListdishCatComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  adddishcat() {
    this.router.navigate(['admin/dishcat/add']);
  }

  upddishcat() {
    this.router.navigate(['admin/dishcat/upd']);
  }
}
