import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  loginForm: any;
  err: string= ""

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: "",
      password: ""
    })
  }

  handleLogin() {
    let mail = this.loginForm.value.mail;
    let password = this.loginForm.value.password;
    if(mail == "" && password == "") this.err = "mail and Password can't be empty!"
    else if(mail == "") this.err = "mail can't be empty!"
    else if(password == "") this.err= "Password can't be empty!"
    else this.err=""
  }
}
