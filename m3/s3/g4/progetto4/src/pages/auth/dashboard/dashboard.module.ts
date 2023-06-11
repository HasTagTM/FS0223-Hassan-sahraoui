import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Ipizza } from './Ipizza';
import { pizzaService } from './pizze.service';
import { FormsModule } from '@angular/forms';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EditPizzaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {

}
