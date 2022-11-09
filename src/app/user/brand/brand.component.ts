import { Component, OnInit } from '@angular/core';
import { BrandserviceService } from 'src/app/services/brandservice.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:any;
  constructor(public brandservice: BrandserviceService) { }

  ngOnInit(): void {
    this.brandservice.loadToken();
    this.brandservice.getBrandsUser()
			.subscribe(data => {
        console.log(data)
				this.brands = data;
        
			}, error => {
				console.log(error)
			});
  }

}
