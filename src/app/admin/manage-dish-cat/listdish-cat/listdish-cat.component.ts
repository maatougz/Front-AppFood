import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';

@Component({
  selector: 'app-listdish-cat',
  templateUrl: './listdish-cat.component.html',
  styleUrls: ['./listdish-cat.component.css']
})
export class ListdishCatComponent implements OnInit {
  dishescat:any;
  constructor(private router : Router,  private dishcattservice : DishCatserviceService) { }

  ngOnInit(): void {
    this.dishcattservice.loadToken();
    this.dishcattservice.getDishesCat()
    .subscribe(data => {
      this.dishescat = data;
    }, error => {
      console.log(error)
    });
  }

  adddishcat() {
    this.router.navigate(['admin/dishcat/add']);
  }

  deldishCat(id:any) {
    this.dishcattservice.deleteDishCat(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.dishcattservice.getDishesCat(); 
      }
    )
    window.location.reload()
  }
}
