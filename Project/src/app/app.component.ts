import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userStaus:boolean;
  constructor(public auth: AuthService, private router: Router){
    
    // if(this.loginService.isAuthenticated())
    //     this.route.navigate(['logedin']);
    // else    
    //   this.loginService.login();
    auth.handleAuthentication();
    if(auth.isAuthenticated()) this.router.navigate(['logedin']);
    else auth.login();
    
  }
}
