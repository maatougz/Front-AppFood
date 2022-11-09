import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Placecategory } from 'src/app/models/placecategory';
import { Restos } from 'src/app/models/restos';
import { BrandserviceService } from 'src/app/services/brandservice.service';
import { PlaceCatserviceService } from 'src/app/services/place-catservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-addresto',
  templateUrl: './addresto.component.html',
  styleUrls: ['./addresto.component.css']
})
export class AddrestoComponent implements OnInit {
  savedResto:any;
  brands:any;
  resto= new Restos();
  listeplacecat:any;
  
  constructor(private router : Router, private brandservice : BrandserviceService, private placecatservice : PlaceCatserviceService,
              private restoservice : RestoserviceService) { }

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
  }

  onSaveResto(resto:any){
    this.restoservice.loadToken();
    this.restoservice.saveResto(resto)
      .subscribe(data => {
        this.savedResto = data;
        this.router.navigate(['admin/resto'])
      }, error => { 
        console.log(error)
      });
  }

}
