import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';
import { ReviewserviceService } from 'src/app/services/reviewservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-onerecipe',
  templateUrl: './onerecipe.component.html',
  styleUrls: ['./onerecipe.component.css']
})
export class OnerecipeComponent implements OnInit {
  id:number;
  recipe:any;
  reviews:any;
  savedReview:any;
  review= new Review();
  savedImage: any= {};
  private selectedFile:any;
  constructor(public recipeservice:RecipeserviceService,private activatedRoute:ActivatedRoute, public reviewservice: ReviewserviceService,
    private router : Router, private userService: UserserviceService,private http: HttpClient) {
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.recipeservice.loadToken();
    this.recipeservice.getRecipeuser(this.id)
			.subscribe(data => {
        console.log(data)
				this.recipe=data
        
			}, error => {
				console.log(error)
			});

      
  }

  onSelectFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  onSaveReview(review:any){
    this.recipeservice.loadToken();
    this.userService.getTokenInfo();
    console.log(this.userService.username);
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    console.log('image')
    console.log(this.selectedFile.name)
    console.log(this.selectedFile)
    console.log(uploadData)
    this.http.post('http://localhost:9595/visitor/image', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log({response})
      console.log(response.body)
      this.savedImage = response.body;
      review.userpub=this.userService.username;
      review.image= this.savedImage;
      this.reviewservice.saveReview(review,this.id)
        .subscribe(data => {
          this.savedReview = data;
        }, error => { 
          console.log(error)
        }
        );
    
    }
    
    );
    this.router.navigateByUrl('/user/recipes');
  }

}
