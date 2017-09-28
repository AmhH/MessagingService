import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router, private http: AuthHttp) {
    this.myForm = this.fb.group({
      'receiver' : ['', Validators.compose([Validators.required, Validators.email])],
      'subject': ['', Validators.required],
      'content' : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    //this.myForm.statusChanges.subscribe(data => console.log(data));
   }

   onSubmit() {
     const data = {
          receiver: this.myForm.value.receiver,
          subject: this.myForm.value.subject,
          content: this.myForm.value.content
     }
<<<<<<< HEAD
    
    this.dataService.sendMail(data);
    this.router.navigateByUrl('logedin/inbox');
=======
      this.dataService.sendMail(data);
      this.router.navigateByUrl('logedin/inbox');
>>>>>>> 038dd9824bf84c2b356166c40672c155162eac29
  }

  close(){
    this.router.navigateByUrl('logedin/inbox');
  }
  ngOnInit() {
  }

}
