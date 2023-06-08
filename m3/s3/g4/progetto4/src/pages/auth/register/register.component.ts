import { Component } from '@angular/core';
import { RegisterData } from '../intefaces/register-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    data:RegisterData = {
      email: '',
      password: '',
      name: '',
      surname: ''
    }

    constructor(private authSvc:AuthService){

    }
    register(){
      this.authSvc.signUp(this.data).subscribe(accessData => {
        alert(accessData.user.name)
      })
    }
}
