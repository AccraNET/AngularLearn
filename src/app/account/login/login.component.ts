import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })


  constructor() { }

  ngOnInit() {

    this.loginForm.controls['email'].setValue('Set your ema')
  }

}
