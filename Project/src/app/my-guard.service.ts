import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate  } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { Observable } from 'rxjs/Rx';
@Injectable()
export class MyGuardService implements CanActivate{

  constructor(private authService:AuthService, private route: Router) { }
  canActivate(): boolean | Observable<boolean>{
        if(this.authService.isAuthenticated())
            return true;
        else{
          this.route.navigate['home'];
          return false;
        }    
  }
}
