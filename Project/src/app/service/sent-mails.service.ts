import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class SentMailsService {

  private email:string;
  private fullUrl:string;
  private userProfile: any;
  constructor(private http: Http) {
    this.userProfile= localStorage.getItem("profile");
    this.email = JSON.parse(this.userProfile)['email'];
    this.fullUrl = 'http://localhost:9999/mail/sent/' + this.email; 
   }

   getsentMails(){
    return this.http.get(this.fullUrl);
  } 

}
