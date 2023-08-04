import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userInfo: any = {};
  constructor(
    public router: Router,
    public notificationsService: NotificationsService,
    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(!this.apiService.isEmpty(this.userInfo.name) && !this.apiService.isEmpty(this.userInfo.phone) && !this.apiService.isEmpty(this.userInfo.email)){
      const formData = new FormData();
      formData.append('name',this.userInfo.name);
      formData.append('email',this.userInfo.email);
      formData.append('phone',this.userInfo.phone);
      formData.append('company',this.userInfo.company);
      if(this.router.url == '/contact') formData.append('subject','Contact us');
      else formData.append('subject','Quote');
      this.apiService.sendContactAndQuoteEmail(formData).subscribe((res: any)=>{
       if(res.status){
         this.userInfo = {};
         this.notificationsService.success("Success!", "Data has been send successfully.");
         this.router.navigateByUrl('/')
       } else this.notificationsService.error('Error!', 'Something going on wrong please try again later.');
      })
    } else this.notificationsService.error("Error!", "Name, Email and Phone Number are requird.");
  }
}
