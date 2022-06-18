import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class ListroleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addrole() {
    this.router.navigate(['admin/user/addrole']);
  }

}
