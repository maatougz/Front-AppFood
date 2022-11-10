import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {
  restos:any;
  listresto:any;
  id:number;
  constructor(public restoservice: RestoserviceService, public activatedRoute : ActivatedRoute, private router: Router) { 
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.restoservice.loadToken();
    this.restoservice.getrestobybrand(this.id)
			.subscribe(data => {
        console.log(data)
				this.restos = data;
        
			}, error => {
				console.log(error)
			});
  }

  onSearchResto({searchTerm}: {searchTerm: string;}) {
    console.log(searchTerm)
    this.restoservice.loadToken();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.router.navigate([`/user/resultresto`], {queryParams: {search: searchTerm}})
  }
}
