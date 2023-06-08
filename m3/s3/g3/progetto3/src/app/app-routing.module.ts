import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path: 'registrati',
    component: RegisterComponent
  },
  {
    path: 'log-in',
    component: LoginComponent
  },

  { path: 'customers', loadChildren: () => import('./customes/customes.module').then(m => m.CustomesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
