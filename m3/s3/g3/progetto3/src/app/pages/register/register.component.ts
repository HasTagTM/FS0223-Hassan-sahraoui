import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{



  constructor(private authService: AuthService){

  }
  ngOnInit(): void {

  }
  onsubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email , password);
    form.reset();

    this.authService.signUp({password:password, email:email, returnSecureToken:true}).subscribe((data) =>{
      const token = data
      console.log(token);


    })

  }

}
