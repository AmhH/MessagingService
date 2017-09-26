import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userStaus:boolean;
  constructor(private loginService: LoginService, private route:Router){
    //this.loginService.logout();
    if(this.loginService.isAuthenticated())
        this.route.navigate(['logedin']);
    else    
      this.loginService.login();
  }
}
