import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  savedUser: any;
  savedImage: any= {};
  
  private selectedFile:any;
  user=new User();
  constructor( private userservice : UserserviceService,private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onSelectFile(event:any){
    
    this.selectedFile = event.target.files[0];
  }

  onSaveUser(user: any){

    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    console.log('image')
    console.log(this.selectedFile.name)
    console.log(this.selectedFile)
    console.log(uploadData)
    this.http.post('http://localhost:9595/admin/image', uploadData, { observe: 'response' })
      .subscribe((response) => {
        console.log({response})
        console.log(response.body)
        console.log({response}) 
        this.savedImage = response.body;
        user.image= this.savedImage;
        this.userservice.saveUser(user)
        .subscribe(data => {
          this.savedUser=data
          this.router.navigate(['admin/user/list'])
          console.log(this.savedUser);
        }, error => {
          console.log(error);
        });
      }
      
      )
    
  }

  

  
}
