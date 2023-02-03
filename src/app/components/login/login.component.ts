import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: String;
  password: String;
  

  constructor(){
    this.email = 'Email';
    this.password = '';
  }

  login(){
    console.log('Email: '+ this.email);
    console.log('Password: '+ this.password);
  }
}
