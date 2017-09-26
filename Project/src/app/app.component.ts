import { Component } from '@angular/core';
import { LoginService } from './login.service';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private loginService: LoginService){
    loginService.login();
  }
}
