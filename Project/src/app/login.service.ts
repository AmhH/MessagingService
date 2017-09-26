import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'
declare var Auth0Lock: any;

@Injectable()
export class LoginService {

  lock = new Auth0Lock("_YcCvmGJcnuuXT7AYA_Jy6CdcGFRGzRl", "mwaproject.auth0.com", {});
  constructor() {
    this.lock.on("authenticated", authResult => {            
      this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
          if (error) {
              throw new Error(error);
          }
          //Set Profile
          localStorage.setItem("profile", JSON.stringify(profile));
          //Set Token
<<<<<<< HEAD

         // localStorage.setItem("id_token", authResult.idToken);

=======
          //localStorage.setItem("id_token", authResult.idToken);
>>>>>>> a903db07f1aa51c1f5e03821045af0acf2c18b38
    });
  }); 
   }

   login(){
     this.lock.show();
   }
   isAuthenticated(){
     return tokenNotExpired("id_token");
   }
   logout(){
     localStorage.removeItem("id_token");
   }

}
