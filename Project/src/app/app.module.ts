import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Http, RequestOptions } from '@angular/http';
//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

//auth0 modules
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';


import { InboxComponent } from './inbox/inbox.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions ){
    return new AuthHttp(new AuthConfig({
      tokenName: 'id_token'
    }), http, options);
}


export const firebaseConfig ={
  apiKey: "AIzaSyApuY_WppNagNRA9PhdfPba0vnT0xdRfEI",
  authDomain: "mwaproject-6aa88.firebaseapp.com",
  databaseURL: "https://mwaproject-6aa88.firebaseio.com",
  projectId: "mwaproject-6aa88",
  storageBucket: "",
  messagingSenderId: "299323343568"
};
@NgModule({
  declarations: [
    AppComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [{provide: AuthHttp, useFactory: authHttpServiceFactory, deps:[Http, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
