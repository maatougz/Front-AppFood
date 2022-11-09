import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandserviceService } from 'src/app/services/brandservice.service';
import { PlaceCatserviceService } from 'src/app/services/place-catservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-updresto',
  templateUrl: './updresto.component.html',
  styleUrls: ['./updresto.component.css']
})
export class UpdrestoComponent implements OnInit {
  jwtToken:any;
  resto:any={};
  id:number;
  listeplacecat:any;
  brands:any;
  constructor(private router : Router, private restoservice : RestoserviceService,private activatedRoute:ActivatedRoute
    , private brandservice : BrandserviceService, private placecatservice : PlaceCatserviceService) { 
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.brandservice.loadToken();
    this.brandservice.getBrands().subscribe(
      response => {
          this.brands = response
      }, error => {
				console.log(error)
			});
      this.placecatservice.loadToken();
      this.placecatservice.getPlacesCat().subscribe(
        response => {
            this.listeplacecat = response
        }, error => {
          console.log(error)
        });
      this.restoservice.getResto(this.id)
      .subscribe(data=>{
        this.resto=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }

  updateResto(){
    this.restoservice.loadToken();
    this.restoservice.updateResto(this.id,this.resto)
    .subscribe(data=>{
      
      this.resto=data;
      console.log(this.resto.pcatname);
      console.log(data);
      alert("success update")
      this.router.navigate(['admin/resto'])
      },err=>{
        console.log(err);
        alert("fail update")
      });
  }

}
