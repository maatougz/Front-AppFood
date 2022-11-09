import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';
import { ReviewserviceService } from 'src/app/services/reviewservice.service';

@Component({
  selector: 'app-listreview',
  templateUrl: './listreview.component.html',
  styleUrls: ['./listreview.component.css']
})
export class ListreviewComponent implements OnInit {

  reviews:any;
  recipes:any;
  constructor(private router : Router, public reviewservice : ReviewserviceService,public recipeservice : RecipeserviceService) { }

  ngOnInit(): void {

    this.reviewservice.loadToken();
    this.reviewservice.getReviews()
			.subscribe(data => {
				this.reviews = data;
			}, error => {
				console.log(error)
			});
    this.recipeservice.loadToken();
    this.recipeservice.getRecipes()
			.subscribe(data => {
				this.recipes = data;
			}, error => {
				console.log(error)
			});
  }

  addreview() {
    this.router.navigate(['admin/review/add']);
  }

  updreview() {
    this.router.navigate(['admin/review/upd']);
  }

  delreview(id:any) {
    this.reviewservice.deleteReview(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.reviewservice.getReviews(); 
      }
    )
    window.location.reload();
  }
}
