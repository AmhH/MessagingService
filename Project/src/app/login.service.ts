import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';
declare var Auth0Lock: any;

@Injectable()
export class LoginService {

  //lock = new Auth0Lock("_YcCvmGJcnuuXT7AYA_Jy6CdcGFRGzRl", "mwaproject.auth0.com", {
    //auth: {redirectUrl: 'http:/localhost:4200/logedin'}
  //});
  constructor(private route: Router) {
  //   this.lock.on("authenticated", authResult => {            
  //     this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {

  //         if (error) {
  //             throw new Error(error);
  //         }
  //         //Set Profile
  //         localStorage.setItem("profile", JSON.stringify(profile));
          
  //         //Set Token
  //         localStorage.setItem("id_token", authResult.idToken);
  //         //
          
  //   });
  // }); 
   }

  //  login(){
  //    //this.lock.show();
     
  //  }
  // public login(): void {
  //   this.auth0.authorize();
  // }

  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       window.location.hash = '';
  //       this.setSession(authResult);
  //       this.router.navigate(['/home']);
  //     } else if (err) {
  //       this.router.navigate(['/home']);
  //       console.log(err);
  //     }
  //   });
  // }

  //  isAuthenticated(){
  //    return tokenNotExpired("id_token");
  //  }
  //  logout(){
  //    localStorage.removeItem("id_token");
  //  }

}
