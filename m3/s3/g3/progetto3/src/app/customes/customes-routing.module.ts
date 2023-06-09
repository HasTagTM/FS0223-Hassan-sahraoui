import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomesComponent } from './customes.component';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes = [
  { path: 'registrati', component: RegisterComponent },
  { path: 'logIn', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomesRoutingModule { }
