import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceCatserviceService } from 'src/app/services/place-catservice.service';

@Component({
  selector: 'app-listplace-cat',
  templateUrl: './listplace-cat.component.html',
  styleUrls: ['./listplace-cat.component.css']
})
export class ListplaceCatComponent implements OnInit {
  placescat:any;
  constructor(private router : Router,  private placecatservice : PlaceCatserviceService) { }

  ngOnInit(): void {
    this.placecatservice.loadToken();
    this.placecatservice.getPlacesCat()
			.subscribe(data => {
				this.placescat = data;
			}, error => {
				console.log(error)
			});
  }

  addplacecat() {
    this.router.navigate(['admin/placecat/add']);
  }

  delplaceCat(id:any) {
    this.placecatservice.deletePlaceCat(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.placecatservice.getPlacesCat(); 
      }
    )
    window.location.reload();
  }
}
