import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';

@Component({
  selector: 'app-adsearchrecipe',
  templateUrl: './adsearchrecipe.component.html',
  styleUrls: ['./adsearchrecipe.component.css']
})
export class AdsearchrecipeComponent implements OnInit {

  constructor(private router : Router, public recipeservice: RecipeserviceService, public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeservice.loadToken();
  }

  onSearchRecipeAD(s:any) {
    console.log(s.ing1)
    console.log(s.ing2)
    console.log(s.ing3)
    this.recipeservice.loadToken();
    this.router.navigate([`/user/resultrecipead`], {queryParams: {ing1: s.ing1,ing2:s.ing2,ing3:s.ing3}})
  }
}
