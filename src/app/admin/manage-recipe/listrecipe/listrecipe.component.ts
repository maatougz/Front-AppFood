import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrecipe',
  templateUrl: './listrecipe.component.html',
  styleUrls: ['./listrecipe.component.css']
})
export class ListrecipeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  addrecipe() {
    this.router.navigate(['admin/recipe/add']);
  }

  updrecipe() {
    this.router.navigate(['admin/recipe/upd']);
  }
}
