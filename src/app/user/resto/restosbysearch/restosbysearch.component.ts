import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-restosbysearch',
  templateUrl: './restosbysearch.component.html',
  styleUrls: ['./restosbysearch.component.css']
})
export class RestosbysearchComponent implements OnInit {

  searchTerm = ""
  results: any =[];
  id:number;
  restos:any;
  constructor(private activerRoute: ActivatedRoute, private restoservice: RestoserviceService) {
    this.id=this.activerRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.restoservice.loadToken();
    this.activerRoute.queryParams.subscribe(params => {
      this.searchTerm = params["search"]
      this.restoservice.getSearchResto(this.searchTerm).subscribe(response => {
        this.results = response
      })
    })
  }

  
}
