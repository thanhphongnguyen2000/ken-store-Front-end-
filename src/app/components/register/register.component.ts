import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm: any;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "username":new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "phone":new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')]),
      "email":new FormControl(null,  [Validators.required, Validators.email]),
      "password":new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    });
  }

  submitData(){
    console.log(this.registerForm.value);
  }
  get username(){return this.registerForm.get('username');}
  get phone(){return this.registerForm.get('phone');}
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}

}
