import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router, NavigationStart } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;
@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock("_YcCvmGJcnuuXT7AYA_Jy6CdcGFRGzRl", "mwaproject.auth0.com", {});
 
  //Store profile object in auth class
  userProfile: Object;

  constructor() {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
     console.log("before")
  console.log(localStorage.getItem('profile'))
    this.lock.show()
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }
}
