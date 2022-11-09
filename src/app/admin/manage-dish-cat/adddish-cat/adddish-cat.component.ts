import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';

@Component({
  selector: 'app-adddish-cat',
  templateUrl: './adddish-cat.component.html',
  styleUrls: ['./adddish-cat.component.css']
})
export class AdddishCatComponent implements OnInit {
  savedDishcat: any;
  constructor( private router: Router, private dishcatservice: DishCatserviceService) { }

  ngOnInit(): void {
  }

  onSaveDishCat(DishCat: any){
    this.dishcatservice.loadToken();
    this.dishcatservice.saveDishCat(DishCat)
      .subscribe(data => {
        this.savedDishcat = data;
        this.router.navigate(['admin/dishcat'])
      }, error => { 
        console.log(error)
      }
      );
    }
}
