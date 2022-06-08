import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+$'), Validators.minLength(8), Validators.maxLength(15)])
  })

  showData() {
    console.log(this.loginForm.value);
    

  }
  get user() {
    return this.loginForm.get("user");
  }
  get pass() {
    return this.loginForm.get("pass");
  }
}
