import { Component, OnInit } from '@angular/core';
import { InboxService } from '../service/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxUserMail;
  constructor(private inboxService:InboxService) {
    this.inboxService.getInboxData().subscribe(
      data => {
        this.inboxUserMail = data.json();
        console.log(this.inboxUserMail);
        for(let mails of this.inboxUserMail)
        console.log(mails['messages']);
        console.log(this.inboxUserMail.length);
      }
    ); 
  }

  ngOnInit() {
  }

}
