import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.css']
})
export class LogedinComponent implements OnInit {
  private first:boolean;
  constructor() {
   
   }
  firstTime(){
      return this.first;
  }
  reverse(){
    this.first = false;
  }
  ngOnInit() {
    this.first = true;
  }

}
