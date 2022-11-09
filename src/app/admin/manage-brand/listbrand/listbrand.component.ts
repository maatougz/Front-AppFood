import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BrandserviceService } from 'src/app/services/brandservice.service';

@Component({
  selector: 'app-listbrand',
  templateUrl: './listbrand.component.html',
  styleUrls: ['./listbrand.component.css']
})
export class ListbrandComponent implements OnInit {

  brands:any;
 
  constructor(private router : Router,public authService : AuthenticationService , public brandservice : BrandserviceService) { }

  ngOnInit(): void {
    this.brandservice.loadToken();
    this.brandservice.getBrands()
			.subscribe(data => {
				this.brands = data;
			}, error => {
				console.log(error)
			});
  }

  addbrand() {
    this.router.navigate(['admin/brand/add']);
  }

  onEditBrand(id:string) {
    this.router.navigate(['admin/brand/upd',id]);
  }

  delbrand(id:any) {
    this.brandservice.deleteBrand(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.brandservice.getBrands();
         
      }
    )
    window.location.reload();

  }
}
