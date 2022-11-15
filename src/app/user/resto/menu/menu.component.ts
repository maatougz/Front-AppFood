import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { DishserviceService } from 'src/app/services/dishservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:number;
  dishes:any;
  listdishcat:any;
  constructor(public restoservice: RestoserviceService, public activatedRoute : ActivatedRoute, private router: Router,
    public dishService : DishserviceService,public dishcatservice:DishCatserviceService) { 
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.dishcatservice.getDishesCatUser()
    .subscribe(data => {
      console.log(data)
      this.listdishcat = data;
      
    }, error => {
      console.log(error)
    });

    this.dishService.getdishbyresto(this.id)
			.subscribe(data => {
        console.log(data)
				this.dishes = data;
        
			}, error => {
				console.log(error)
			});
  }

}
