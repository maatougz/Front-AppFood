import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';


@Component({
  selector: 'app-recipebysearch',
  templateUrl: './recipebysearch.component.html',
  styleUrls: ['./recipebysearch.component.css']
})
export class RecipebysearchComponent implements OnInit {
  searchTerm = ""
  results: any =[];
  id:number;
  recipes:any;
  constructor(private activerRoute: ActivatedRoute, private recipeservice: RecipeserviceService, private router : Router) {
    this.id=this.activerRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.recipeservice.loadToken();
    this.activerRoute.queryParams.subscribe(params => {
      this.searchTerm = params["search"]
      this.recipeservice.getSearchRecipe(this.searchTerm).subscribe(response => {
        this.results = response
      })
    })
  }

  addrecipe(){
    this.router.navigateByUrl("/user/recipe/addrecipe");
  }

}
