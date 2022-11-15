import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishserviceService } from 'src/app/services/dishservice.service';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-adresultresto',
  templateUrl: './adresultresto.component.html',
  styleUrls: ['./adresultresto.component.css']
})
export class AdresultrestoComponent implements OnInit {
  price:any
  location = ""
  dishname = ""
  results: any =[];
  id:number;
  restos:any;
  constructor(private activerRoute: ActivatedRoute, private restoservice: RestoserviceService, private router : Router,
    public dishservice:DishserviceService) {
    this.id=this.activerRoute.snapshot.params['id']; }

  ngOnInit(): void {
    

    
    console.log("******")
    this.activerRoute.queryParams.subscribe(params => {
      console.log(params)
      this.price = params["price"]
      console.log(this.price)
      this.location = params["location"]
      console.log(this.location)
      this.dishname = params["dishname"]
      console.log(this.dishname)
      this.restoservice.getADSearchResto(this.price,this.location,this.dishname).subscribe(response => {
        this.results = response
        console.log(this.results)
      })
    })
  }

}
