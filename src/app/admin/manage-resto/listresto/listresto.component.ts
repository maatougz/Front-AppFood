import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandserviceService } from 'src/app/services/brandservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
  restos:any;
  restoBrand:any;
  constructor( private router : Router,  private restoservice : RestoserviceService, private brandservice : BrandserviceService ) { }

  ngOnInit(): void {
    
    this.brandservice.loadToken();
    this.brandservice.getBrands().subscribe(
      response => {
          this.restoBrand = response

      }, error => {
				console.log(error)
			});
      this.restoservice.loadToken();
    this.restoservice.getRestos()
			.subscribe(data => {
				this.restos = data;
			}, error => {
				console.log(error)
			});
  }

  addresto() {
    this.router.navigate(['admin/resto/add']);
  }

  onEditResto(id:string) {
    this.router.navigate(['admin/resto/upd',id]);
  }
  delresto(id:any) {
    this.restoservice.deleteRestos(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.restoservice.getRestos(); 
      }
    )
    this.router.navigate(['admin']);
  }
}