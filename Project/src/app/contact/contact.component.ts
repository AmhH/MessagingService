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
  contacts;
  constructor(private ds: DataService) {
    this.ds.getContacts().subscribe(res => {
      this.contacts = res.json();
    });
  }

  checker(fullname: string): boolean {
    return fullname.indexOf(this.val)>-1;
  }

  ngOnInit() {
  }

}