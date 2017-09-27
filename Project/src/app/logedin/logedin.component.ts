import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.css']
})
export class LogedinComponent implements OnInit {
  private first:boolean = true;
  constructor() {
   
   }
  firstTime(){
      this.reverse();
      return this.first;
  }
  reverse(){
    this.first = !this.first;
  }
  ngOnInit() {
    this.first = true;
  }

}
