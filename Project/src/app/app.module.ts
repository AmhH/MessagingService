import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

//auth0 modules
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';

//componenets 
import { InboxComponent } from './inbox/inbox.component';
import { LoginService } from './login.service';
import { LogoutComponent } from './logout/logout.component';
import { LogedinComponent } from './logedin/logedin.component';
import { DetailComponent } from "./detail/detail.component";
import { SentComponent } from "./sent/sent.component";
//services
import { InboxService } from "./service/inbox.service";
import { ComposeComponent } from './compose/compose.component';
import { SentMailsService } from "./service/sent-mails.service";
import { DataService } from "./service/data.service";
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { SentDetailComponent } from './sent-detail/sent-detail.component';
=======
import { TrashComponent } from './trash/trash.component';
>>>>>>> dada6549c2b53663bab7af8b1da8d0b57cdc0349

// export function authHttpServiceFactory(http: Http, options: RequestOptions ){
//     return new AuthHttp(new AuthConfig({
//       tokenName: 'id_token'
//     }), http, options);
// }

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('id_token'))
  }), http, options);
}

const My_Routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:AppComponent},
  {path: 'logedin', component:LogedinComponent, children: [
    {path: 'inbox', component:InboxComponent, children:[
      {path: 'detail/:name', component:DetailComponent}
    ]},
    {path: 'sent', component:SentComponent, children:[
      {path: 'detail/:name', component:SentDetailComponent}
    ]},
    {path: 'compose', component:ComposeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'logout', component:LogoutComponent}
  ]}
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
    SentComponent,
    DetailComponent,
    ComposeComponent,
    ContactComponent,
<<<<<<< HEAD
    SentDetailComponent
=======
    TrashComponent
>>>>>>> dada6549c2b53663bab7af8b1da8d0b57cdc0349
  ],
  imports: [
    BrowserModule, HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(My_Routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps:[Http, RequestOptions]},
    LoginService, 
    InboxService,
    SentMailsService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
