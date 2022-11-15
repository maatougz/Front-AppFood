import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-adsearchresto',
  templateUrl: './adsearchresto.component.html',
  styleUrls: ['./adsearchresto.component.css']
})
export class AdsearchrestoComponent implements OnInit {

  constructor(private router : Router, public restoservice: RestoserviceService, public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.restoservice.loadToken();
  }

  onSearchRestoAD(s:any) {
    console.log(s.price)
    console.log(s.location)
    console.log(s.dishname)
    this.restoservice.loadToken();
    this.router.navigate([`/user/resultrestoad`], {queryParams: {price: s.price,location:s.location,dishname:s.dishname}})
  }

}
