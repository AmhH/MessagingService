import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth/auth.service';
import {Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
private email:string;
private fullUrl:string;
  constructor(private http: AuthHttp, private authService: AuthService ) {
    this.email = this.authService.getUser().idTokenPayload.name;
    this.fullUrl = 'http:/localhost:9999/sent' + this.email;
   
  }
  sendMail(data) {
    let myHeader = new Headers({'Content-Type': 'application/json'});
    let option = new RequestOptions({ headers: myHeader });
      data.email = this.email;
      console.log('email '+this.email);
      this.http.post('http://localhost:9999/sent',data).subscribe(data => console.log(data.json()));
   }

   getContacts(){
     return this.http.get('http://localhost:9999/contact');
   }

   getTrash(){
     return this.http.get('http://localhost:9999/trash/'+ this.email);
   }
}
