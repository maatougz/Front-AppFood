import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishserviceService } from 'src/app/services/dishservice.service';

@Component({
  selector: 'app-listdish',
  templateUrl: './listdish.component.html',
  styleUrls: ['./listdish.component.css']
})
export class ListdishComponent implements OnInit {

  dishes:any;
  
  constructor(private router : Router,  private dishservice : DishserviceService) { }

  ngOnInit(): void {
    
    this.dishservice.loadToken();
    this.dishservice.getDishes()
			.subscribe(data => {
				this.dishes = data;
			}, error => {
				console.log(error)
			});
  }

  adddish() {
    this.router.navigate(['admin/dish/add']);
  }

  onEditDish(id:string) {
    this.router.navigate(['admin/dish/upd',id]);
  }

  deldish(id:any) {
    this.dishservice.deleteDish(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.dishservice.getDishes(); 
      }
    )
    window.location.reload();
  }
}
