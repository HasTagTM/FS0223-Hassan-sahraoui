import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipizza } from '../Ipizza';
import { pizzaService } from '../pizze.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent {
  pizza:Partial<Ipizza> = {
    gusto:'',
    prezzo: 0.00,
    ingredienti: '',
    aggiunte:''
  }

  constructor(
    private pizzaSvc:pizzaService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(){

    this.route.params
    .subscribe((params:any)=>{
      this.pizzaSvc.getById(params.id).subscribe((pizza)=>{
          this.pizza = pizza
      })
    })
  }

  edit(){
    this.pizzaSvc.put(this.pizza)
    .subscribe((pizze)=>{
      this.router.navigate(['/dashboard'])
    })
  }
}
