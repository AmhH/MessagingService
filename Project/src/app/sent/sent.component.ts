import { Component, OnInit } from '@angular/core';
import { SentMailsService } from '../service/sent-mails.service'


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  sentUserMail;
    constructor(private sentService:SentMailsService) {
      this.sentService.getsentMails().subscribe(
        data => {
          this.sentUserMail = Array.of(data.json());
          console.log(this.sentUserMail);
          console.log(this.sentUserMail.length)
        }
      ); 
  }
  ngOnInit() {
  }

}
