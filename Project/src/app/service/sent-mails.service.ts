import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class SentMailsService {

  private email:string;
  private fullUrl:string;

  constructor(private http: AuthHttp, private authService: AuthService ) {
    this.email = this.authService.getUser().idTokenPayload.name;
    console.log(this.email + " asdfasdas")  ;
    this.fullUrl = 'http://localhost:9999/mail/sent/' + this.email;
   }

   getsentMails(){
    return this.http.get(this.fullUrl);
  } 
}
