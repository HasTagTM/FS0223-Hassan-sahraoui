import { Component } from '@angular/core';
import { IloginData } from '../intefaces/ilogin-data';
import { AuthService } from '../auth.service';

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

  constructor(private authSvc: AuthService){

  }
  data:IloginData = {email:'', password: ''}

  login(){
    this.authSvc.login(this.data).subscribe(accessData => {
      alert(`sei loggato come ${accessData.user.name}`)
    })
  }
}
