import { Component } from '@angular/core';
import { IloginData } from '../intefaces/ilogin-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private authSvc: AuthService,
    private router: Router){

  }


  login(){
    this.authSvc.login(this.data).subscribe(accessData => {
      this.router.navigate(['/dashboard'])
    })
  }
}
