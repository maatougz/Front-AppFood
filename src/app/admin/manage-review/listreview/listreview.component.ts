import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listreview',
  templateUrl: './listreview.component.html',
  styleUrls: ['./listreview.component.css']
})
export class ListreviewComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addreview() {
    this.router.navigate(['admin/review/add']);
  }

  updreview() {
    this.router.navigate(['admin/review/upd']);
  }
}
