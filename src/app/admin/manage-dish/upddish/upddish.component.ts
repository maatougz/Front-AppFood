import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishCatserviceService } from 'src/app/services/dish-catservice.service';
import { DishserviceService } from 'src/app/services/dishservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-upddish',
  templateUrl: './upddish.component.html',
  styleUrls: ['./upddish.component.css']
})
export class UpddishComponent implements OnInit {
  jwtToken:any;
  dish:any={};
  id:number;
  listedishcat:any;
  restos:any;
  private selectedFile:any;
  savedImage: any= {};

  constructor(private router : Router, private restoservice : RestoserviceService,private activatedRoute:ActivatedRoute
    , private dishcatservice : DishCatserviceService, private dishservice : DishserviceService,private http: HttpClient) { 
      this.id=activatedRoute.snapshot.params['id'];
  }
    
  ngOnInit(): void {
    this.dishcatservice.loadToken();
    this.dishcatservice.getDishesCat().subscribe(
      response => {
          this.listedishcat = response
      }, error => {
				console.log(error)
			});
      this.restoservice.loadToken();
      this.restoservice.getRestos().subscribe(
        response => {
            this.restos = response
        }, error => {
          console.log(error)
        });
      this.dishservice.loadToken();
      this.dishservice.getDish(this.id)
      .subscribe(data=>{
        this.dish=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }

  onSelectFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  updateDish(){
    this.dishservice.loadToken();
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    
    console.log(this.selectedFile.name)
    console.log(this.selectedFile)
    console.log(uploadData)
    this.http.post('http://localhost:9595/visitor/image', uploadData, { observe: 'response' })
      .subscribe((response) => {
        console.log({response})
        console.log(response.body)
        console.log({response}) 
        this.savedImage = response.body;
        this.dish.image= this.savedImage;
    
        this.dishservice.updateDish(this.id,this.dish)
        .subscribe(data=>{
          
          this.dish=data;
          console.log(this.dish.dcatname);
          console.log(data);
          alert("success update")
          this.router.navigate(['admin/dish'])
          },err=>{
            console.log(err);
            alert("fail update")
          });
        }
        );
  }

}
