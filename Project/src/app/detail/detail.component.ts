import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
private from:string;
private to:string;
private subject:string;
private content:string;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(
      data => {
        this.from = data.mailer;
        this.to = data.receiver;
        this.subject = data.subject;
        this.content = data.content;
      }
    )
  }

  ngOnInit() {
  }

}
