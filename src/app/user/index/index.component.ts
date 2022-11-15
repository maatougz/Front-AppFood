import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { BrandserviceService } from 'src/app/services/brandservice.service';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';
import { ReviewserviceService } from 'src/app/services/reviewservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  currentUser:any={};
  username:any;
  recipes:any;
  restos:any;
  brands:any;
  latestbrands:any;
  latestrecipes:any;
  users:any;
  reviews:any;
  constructor( public recipeservice : RecipeserviceService, public userService: UserserviceService,
    public restoservice: RestoserviceService, public brandservice: BrandserviceService, public reviewservice : ReviewserviceService) { }

  ngOnInit(): void {
    
    this.restoservice.getRestosUser()
			.subscribe(data => {
        console.log(data)
				this.restos = data;
        
			}, error => {
				console.log(error)
			});
    
    this.recipeservice.getRecipesUser()
			.subscribe(data => {
        console.log(data)
				this.recipes = data;
				this.latestrecipes=this.recipes.slice(0,3)
			}, error => {
				console.log(error)
			});

    
    this.brandservice.getBrandsUser()
			.subscribe(res => {
        console.log(res)
				this.brands = res;
				this.latestbrands=this.brands.slice(0,4)
				
			}, error => {
				console.log(error)
			});
    
    
    this.userService.getUsersUser()
			.subscribe(data => {
        console.log(data)
				this.users = data;
        
			}, error => {
				console.log(error)
			});

      
      this.reviewservice.getReviewsindex()
			.subscribe(data => {
        console.log(data)
				this.reviews = data;
        
			}, error => {
				console.log(error)
			});

  }

 

}
