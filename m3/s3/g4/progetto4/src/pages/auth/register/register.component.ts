import { Component } from '@angular/core';
import { RegisterData } from '../intefaces/register-data';

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

    register(){

    }
}
