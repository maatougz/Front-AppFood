import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router : Router, public activatedRoute : ActivatedRoute, public userservice: UserserviceService) { }

  ngOnInit(): void {
  }

  onSendMessage(s:any) {
    console.log(s.name)
    console.log(s.email)
    console.log(s.subject)
    console.log(s.message)
    this.userservice.saveContact(s.name,s.email,s.subject,s.message).subscribe(response => {
      
      console.log(response)
    })
    this.router.navigate(['/user'])
  }

}
