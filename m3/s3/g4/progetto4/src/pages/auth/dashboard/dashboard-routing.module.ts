import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: 'edit/:id' , component: EditPizzaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
