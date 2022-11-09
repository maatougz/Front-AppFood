import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/models/dish';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { DishserviceService } from 'src/app/services/dishservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.css']
})
export class AdddishComponent implements OnInit {
  savedDish:any;
  restos:any;
  dish= new Dish();
  listedishcat:any;
  savedImage: any= {};
  private selectedFile:any;

  constructor(private router : Router, private dishcatservice : DishCatserviceService,
    private restoservice : RestoserviceService, private dishservice : DishserviceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.restoservice.loadToken();
    this.restoservice.getRestos().subscribe(
      response => {
          this.restos = response
      }, error => {
				console.log(error)
			});
      this.dishcatservice.loadToken();
      this.dishcatservice.getDishesCat().subscribe(
        response => {
            this.listedishcat = response
        }, error => {
          console.log(error)
        });
  }


  onSelectFile(event:any){
      this.selectedFile = event.target.files[0];
  }


  onSaveDish(dish:any){
    this.dishservice.loadToken();
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
      dish.image= this.savedImage;
      this.dishservice.saveDish(dish)
        .subscribe(data => {
          this.savedDish = data;
          this.router.navigate(['admin/dish'])
        }, error => { 
          console.log(error)
        }
        );
    
    }
    );
  }



}
