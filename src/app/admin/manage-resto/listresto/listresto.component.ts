import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  addresto() {
    this.router.navigate(['admin/resto/add']);
  }

  updresto() {
    this.router.navigate(['admin/resto/upd']);
  }
}
