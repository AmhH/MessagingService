import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

//auth0 modules
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
//componenets 
import { InboxComponent } from './inbox/inbox.component';
import { LoginService } from './login.service';
import { LogoutComponent } from './logout/logout.component';
import { LogedinComponent } from './logedin/logedin.component';
//services
import { InboxService } from "./service/inbox.service";
import { ComposeComponent } from './compose/compose.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions ){
    return new AuthHttp(new AuthConfig({
      tokenName: 'id_token'
    }), http, options);
}

const My_Routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:AppComponent},
  {path: 'logedin', component:LogedinComponent, children: [
    {path: 'inbox', component:InboxComponent},
    {path: 'logout', component:LogoutComponent}
  ]},
];
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
    InboxComponent,
    LogoutComponent,
    LogedinComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(My_Routes)
  ],
  providers: [{provide: AuthHttp, useFactory: authHttpServiceFactory, deps:[Http, RequestOptions]},LoginService, InboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
