import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceCatserviceService } from 'src/app/services/place-catservice.service';

@Component({
  selector: 'app-addplace-cat',
  templateUrl: './addplace-cat.component.html',
  styleUrls: ['./addplace-cat.component.css']
})
export class AddplaceCatComponent implements OnInit {
  savedPlacecat: any;
  constructor(private placecatservice : PlaceCatserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSavePlacesCat(PlaceCat: any){
  this.placecatservice.loadToken();
  this.placecatservice.savePlaceCat(PlaceCat)
    .subscribe(data => {
      this.savedPlacecat = data;
      this.router.navigate(['admin/placecat'])
    }, error => { 
      console.log(error)
    }
    );
  }
}
