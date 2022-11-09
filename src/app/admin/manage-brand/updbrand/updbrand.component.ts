import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandserviceService } from 'src/app/services/brandservice.service';

@Component({
  selector: 'app-updbrand',
  templateUrl: './updbrand.component.html',
  styleUrls: ['./updbrand.component.css']
})
export class UpdbrandComponent implements OnInit {
  brand:any={};
  id:number;
  private selectedFile:any;
  savedImage: any= {};
  
  jwtToken:any;
  constructor(private router : Router, private brandservice : BrandserviceService,
    private activatedRoute:ActivatedRoute,private http: HttpClient) {
      this.id=activatedRoute.snapshot.params['id'];
     }

  ngOnInit(): void {
    this.brandservice.loadToken();
    this.brandservice.getBrand(this.id)
    .subscribe(data=>{
      this.brand=data;
      console.log(data);
  },err=>{
    console.log(err);
  })
  }

  onSelectFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  updateBrand() {
    this.brandservice.loadToken();
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
        this.brand.image= this.savedImage;
        this.brandservice.updateBrand(this.id,this.brand)
            .subscribe(data=>{
              console.log(data);
              alert("success update")
              this.router.navigate(['admin/brand'])
            },err=>{
              console.log(err);
              alert("fail update")
            }); 
      }
      );
    }


}
