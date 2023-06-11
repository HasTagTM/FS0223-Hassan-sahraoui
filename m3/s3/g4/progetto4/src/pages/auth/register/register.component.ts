import { Component, ViewChild } from '@angular/core';
import { RegisterData } from '../intefaces/register-data';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f')
  form!: NgForm
  constructor(private authSvc:AuthService){

  }
    data:RegisterData = {
      email: '',
      password: '',
      name: '',
      surname: ''
    }


    register(){
      this.authSvc.signUp(this.data).subscribe(accessData => {
        alert(accessData.user.name)

      })
    }

    ngOnInit():void{

    }
}
