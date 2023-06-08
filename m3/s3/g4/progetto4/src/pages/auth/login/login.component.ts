import { Component } from '@angular/core';
import { IloginData } from '../intefaces/ilogin-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data:IloginData = {
    email: '',
    password: ''
  }

  login(){

  }
}
