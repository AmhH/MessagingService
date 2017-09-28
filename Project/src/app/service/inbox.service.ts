import { Injectable } from '@angular/core';
//import { AuthHttp } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth/auth.service';
//import { map } from 'rxjs'
@Injectable()
export class InboxService {
private email:string;
private fullUrl:string;
  constructor(private http: AuthHttp, private authService: AuthService ) {
    
    
    this.email = this.authService.getUser().idTokenPayload.name;
    this.fullUrl = 'http://localhost:9999/inbox/' + this.email; 
  }
  getInboxData(){
    return this.http.get(this.fullUrl,);
  }

  sendMail(data) {
      data.email = this.email;

      this.http.post('http://localhost:9999/sent', data);
   }
}
