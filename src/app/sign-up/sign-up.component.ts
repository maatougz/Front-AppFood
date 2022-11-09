import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  mode = 'ajout';
  userAdded: any;
  errorMessage: string="";

  savedImage: any= {};
  
  private selectedFile:any;
  user=new User();
  constructor(private userService:UserserviceService , private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSelectFile(event:any){
    
    this.selectedFile = event.target.files[0];
  }

  onSaveUser(user:any) {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    console.log('image')
    console.log(this.selectedFile.name)
    console.log(this.selectedFile)
    console.log(uploadData)
    this.http.post('http://localhost:9595/visitor/image', uploadData, { observe: 'response' })
      .subscribe((response) => {
        console.log({response})
        console.log(response.body)
        console.log({response}) 
        this.savedImage = response.body;
        user.image= this.savedImage;
        this.userService.saveUser(user)
          .subscribe(data => {
            this.mode = 'confirmation';
            this.userAdded = data;
            this.router.navigateByUrl('/login');
          }, error => {
            console.log(error);
            this.errorMessage = error.error.message;
          });
        }
      
        )
	}
}
