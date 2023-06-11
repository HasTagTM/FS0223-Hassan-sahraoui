import { Component, OnInit } from '@angular/core';
import { Ipizza } from './Ipizza';
import { pizzaService } from './pizze.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  pizze:Ipizza[] = [];

  newPizza:Partial<Ipizza> = {

    gusto: '',
    prezzo:0,
    ingredienti: '',
    aggiunte:''
  }

  constructor(private pizzaSvc:pizzaService){}

  ngOnInit(){
    this.pizzaSvc.getAll().subscribe((pizze)=>{
      this.pizze = pizze;
    })
  }

  create(){
    this.pizzaSvc.post(this.newPizza)
    .subscribe(data=>{
      this.pizze.push(data)
    })
  }

  delete(id:number){
    this.pizzaSvc.delete(id)
    .subscribe(data=>{
      let index = this.pizze.findIndex(p => p.id == id)
      this.pizze.splice(index,1)
    })
  }
}
