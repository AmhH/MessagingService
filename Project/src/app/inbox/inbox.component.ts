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
        this.inboxUserMail = Array.of(data.json());
        console.log(this.inboxUserMail);
        console.log(this.inboxUserMail.length)
      }
    ); 
  }

  ngOnInit() {
  }

}
