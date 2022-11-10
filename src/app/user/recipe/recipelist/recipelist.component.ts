import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes:any;
  constructor(private router : Router, public recipeservice: RecipeserviceService, public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeservice.loadToken();
    this.recipeservice.getRecipesUser()
			.subscribe(data => {
        console.log(data)
				this.recipes = data;
        
			}, error => {
				console.log(error)
			});
  }

  onSearchRecipe({searchTerm}: {searchTerm: string;}) {
    console.log(searchTerm)
    this.recipeservice.loadToken();
    this.router.navigate([`/user/resultrecipe`], {queryParams: {search: searchTerm}})
  }

  addrecipe(){
    this.router.navigateByUrl("/user/recipe/addrecipe");
  }
}
