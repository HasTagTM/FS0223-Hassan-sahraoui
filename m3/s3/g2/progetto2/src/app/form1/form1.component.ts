import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

    @ViewChild('f',{static:true}) form!:NgForm

    submit(form:NgForm){
      this.form.reset()
    }

    ngOnInit(){
      this.form.statusChanges?.subscribe(status =>{
        console.log(status);

      })
    }

}
