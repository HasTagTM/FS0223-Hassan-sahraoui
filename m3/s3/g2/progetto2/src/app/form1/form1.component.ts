import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component {
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
