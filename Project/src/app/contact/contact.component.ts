import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  val: string;
  contactsFrom;
  constructor(private ds: DataService) {    
    console.log('hello from contactsFrom');
    this.ds.getContacts().subscribe(res => {
      this.contactsFrom = res.json();
      for ( let con of this.contactsFrom){
        console.log(con.contacts[0].fullname);
      }
    });
    //console.log(this.contactsFrom.length);
   /*  for ( let con of this.contactsFrom){
      console.log(con.fullname)
    } */
  }

  checker(fullname: string): boolean {
    return fullname.indexOf(this.val)>-1;
  }

  ngOnInit() {
  }

}