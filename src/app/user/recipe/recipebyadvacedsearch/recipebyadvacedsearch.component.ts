import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';

@Component({
  selector: 'app-recipebyadvacedsearch',
  templateUrl: './recipebyadvacedsearch.component.html',
  styleUrls: ['./recipebyadvacedsearch.component.css']
})
export class RecipebyadvacedsearchComponent implements OnInit {

  x:any;
  ing1:any
  ing2 = ""
  ing3 = ""
  results: any =[];
  id:number;
  recipes:any;
  constructor(private activerRoute: ActivatedRoute, private recipeservice: RecipeserviceService, private router : Router) {
    this.id=this.activerRoute.snapshot.params['id']; 
    
  }

  ngOnInit(): void {
    this.recipeservice.loadToken();
    console.log("******")
    this.activerRoute.queryParams.subscribe(params => {
      console.log(params)
      this.ing1 = params["ing1"]
      console.log(this.ing1)
      this.ing2 = params["ing2"]
      console.log(this.ing2)
      this.ing3 = params["ing3"]
      console.log(this.ing3)
      this.recipeservice.getADSearchRecipe(this.ing1,this.ing2,this.ing3).subscribe(response => {
        this.results = response
        console.log(this.results)
      })
    })
  }

  addrecipe(){
    this.router.navigateByUrl("/user/recipe/addrecipe");
  }

}
