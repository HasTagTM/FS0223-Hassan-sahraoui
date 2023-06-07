import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f')
  form!: NgForm

  constructor(){

  }
  submit(form: NgForm) {
    this.form.reset();
    console.log(form);
  }

  ngOnInit(): void {

  }
}
