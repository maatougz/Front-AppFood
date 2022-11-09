import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandserviceService } from 'src/app/services/brandservice.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  

  savedBrand: any;

 savedImage: any= {};
  
  private selectedFile:any;
  
  brand=new Brand();
  jwtToken:any;
  constructor(public  brandservice : BrandserviceService,private router:Router ,private http: HttpClient) 
  {  }

  ngOnInit(): void { 
  }

  onSelectFile(event:any){
    this.selectedFile = event.target.files[0];
  }
  
  onSaveBrand(brand: any){
    this.brandservice.loadToken();
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
        console.log({response}) 
        this.savedImage = response.body;
        brand.image= this.savedImage;
        this.brandservice.saveBrand(brand).subscribe(data => {
        
          this.savedBrand=data
          this.router.navigateByUrl('/admin/brand');
          console.log(this.savedBrand);
        }, error => {
          console.log(error);
        });
      }
      
      );
    }


}
