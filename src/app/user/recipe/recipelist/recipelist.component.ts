import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  listdishcat:any;
  recipes:any;
  constructor(private router : Router, public recipeservice: RecipeserviceService, public activatedRoute : ActivatedRoute,
    public dishcatservice:DishCatserviceService) { }

  ngOnInit(): void {

    this.dishcatservice.getDishesCatUser()
    .subscribe(data => {
      console.log(data)
      this.listdishcat = data;
      
    }, error => {
      console.log(error)
    });
    
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
