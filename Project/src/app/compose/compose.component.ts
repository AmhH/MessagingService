import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.myForm = this.fb.group({
      'receiver' : ['', Validators.compose([Validators.required, Validators.email])],
      'subject': ['', Validators.required],
      'content' : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.myForm.statusChanges.subscribe(data => console.log(data));
   }

   onSubmit() {
     const data = {
          receiver: this.myForm.value.receiver,
          subject: this.myForm.value.subject,
          content: this.myForm.value.content
     }
    this.dataService.sendMail(data);
    this.router.navigateByUrl('/inbox');
  }

  close(){
    this.router.navigateByUrl('/inbox');
  }
  ngOnInit() {
  }

}
