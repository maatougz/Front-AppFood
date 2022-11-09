import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-listrecipe',
  templateUrl: './listrecipe.component.html',
  styleUrls: ['./listrecipe.component.css']
})
export class ListrecipeComponent implements OnInit {

  recipes:any;

  constructor( private router : Router, public recipeservice : RecipeserviceService) { }

  ngOnInit(): void {
    this.recipeservice.loadToken();
    this.recipeservice.getRecipes()
			.subscribe(data => {
				this.recipes = data;
			}, error => {
				console.log(error)
			});

  }

  addrecipe() {
    this.router.navigate(['admin/recipe/add']);
  }

  updrecipe() {
    this.router.navigate(['admin/recipe/upd']);
  }

  delrecipe(id:any) {
    this.recipeservice.deleteRecipe(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.recipeservice.getRecipes(); 
      }
    )
    window.location.reload();
  }
}
