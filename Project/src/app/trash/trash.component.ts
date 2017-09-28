import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashMail;
  constructor(private ds: DataService) { 
    this.ds.getTrash().subscribe(
      data => {
        this.trashMail = data.json();
      }
    ); 
  }

  ngOnInit() {
  }

}
