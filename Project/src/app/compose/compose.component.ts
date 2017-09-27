import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { InboxService } from '../service/inbox.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: InboxService) {
    this.myForm = this.fb.group({
      'receiver' : ['', Validators.compose([Validators.required, Validators.email])],
      'subject': ['', Validators.required],
      'content' : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.myForm.statusChanges.subscribe(data => console.log(data));
   }

   onSubmit() {
    console.log(this.myForm.value.content);
  }

  ngOnInit() {
  }

}
