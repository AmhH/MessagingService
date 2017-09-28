import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxService } from '../service/inbox.service';
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
  constructor(private route: ActivatedRoute, private inboxService:InboxService) { 
    this.route.params.subscribe(
      data => {
        this.inboxService.getInboxData().subscribe(
          data1 => { 
           data1.json().forEach(element => {
             if(element.messages['_id']==data['name']){
                    this.from = element.messages['mailer'];
                    this.to = element.messages['receiver'];
                    this.subject = element.messages['subject'];
                    this.content = element.messages['content'];
             }
           });
          }
        ); 
        //console.log("this is the params" + JSON.stringify(data));
      }
    )
  }

  ngOnInit() {
  }

}
