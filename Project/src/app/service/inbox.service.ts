import { Injectable } from '@angular/core';
//import { AuthHttp } from '@angular/http';
import { Http } from '@angular/http';
//import { map } from 'rxjs'
@Injectable()
export class InboxService {
private email:string;
private fullUrl:string;
private userProfile: any;
  constructor(private http: Http) {
    this.userProfile= localStorage.getItem("profile");
    this.email = JSON.parse(this.userProfile)['email'];
    this.fullUrl = 'http://localhost:9999/mail/inbox/' + this.email; 
  }
  getInboxData(){
    return this.http.get(this.fullUrl);
  }
}
