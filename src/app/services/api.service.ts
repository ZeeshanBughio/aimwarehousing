import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl = environment.baseUrl; 
  constructor(public http: HttpClient) { }

  isEmpty(val: any) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  validateEmail (email: string) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  }

  sendEmail(emailData: any){
    return this.http.post(this.baseUrl + "/allallc/api/user/", emailData, {
      reportProgress: true,
      responseType: 'json'
    })
  }
  
  getPriceAndServices(){
    return this.http.get(this.baseUrl + "/allallc/api/user/fetch_all")
  }
  
  getSlidesData(){
    return this.http.get(this.baseUrl + "/allallc/api/user/fetch_all_text")
  }
  
  getStorageData(){
    return this.http.get(this.baseUrl + "/allallc/api/user/getAllStorageData")
  }
  
  sendContactAndQuoteEmail(formData: any){
    return this.http.post(this.baseUrl + "/allallc/api/user/contactUs", formData)
  }
}
