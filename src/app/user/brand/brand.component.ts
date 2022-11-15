import { Component, OnInit } from '@angular/core';
import { BrandserviceService } from 'src/app/services/brandservice.service';
import { PlaceCatserviceService } from 'src/app/services/place-catservice.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:any;
  listplacecat:any;
  constructor(public brandservice: BrandserviceService, public placecatservice : PlaceCatserviceService) { }

  ngOnInit(): void {
    this.placecatservice.getPlacesCatUser()
    .subscribe(data => {
      console.log(data)
      this.listplacecat = data;
      
    }, error => {
      console.log(error)
    });

    this.brandservice.getBrandsUser()
			.subscribe(data => {
        console.log(data)
				this.brands = data;
        
			}, error => {
				console.log(error)
			});
  }

}
