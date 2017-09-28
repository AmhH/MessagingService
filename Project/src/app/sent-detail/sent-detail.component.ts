import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentMailsService } from '../service/sent-mails.service';

@Component({
  selector: 'app-sent-detail',
  templateUrl: './sent-detail.component.html',
  styleUrls: ['./sent-detail.component.css']
})
export class SentDetailComponent implements OnInit {

  private from:string;
  private to:string;
  private subject:string;
  private content:string;
    constructor(private route: ActivatedRoute, private sentMailService:SentMailsService) { 
      this.route.params.subscribe(
        data => {
          this.sentMailService.getsentMails().subscribe(
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
