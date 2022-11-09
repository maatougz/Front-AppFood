import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { RecipeserviceService } from 'src/app/services/recipeservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-recipeadd',
  templateUrl: './recipeadd.component.html',
  styleUrls: ['./recipeadd.component.css']
})
export class RecipeaddComponent implements OnInit {

  savedRecipe:any;
  recipe= new Recipe();
  listedishcat:any;
  savedImage: any= {};
  private selectedFile:any;


  constructor(private router : Router, private dishcatservice : DishCatserviceService,
    private recipeservice : RecipeserviceService,private http: HttpClient, private userService: UserserviceService) { }

  ngOnInit(): void {
    this.dishcatservice.loadToken();
    this.dishcatservice.getDishesCatUser().subscribe(
      response => {
        console.log(response);
          this.listedishcat = response

      }, error => {
        console.log(error)
      });
  }

  onSelectFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  onSaveRecipe(recipe:any){
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
      recipe.userpub=this.userService.username;
      recipe.image= this.savedImage;
     
      this.recipeservice.saveRecipe(recipe)
        .subscribe(data => {
          this.savedRecipe = data;
        }, error => { 
          console.log(error)
        }
        );
    
    }
    
    );
    this.router.navigateByUrl('/user/recipes');
  }
}
