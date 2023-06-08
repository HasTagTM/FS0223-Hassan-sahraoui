import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomesRoutingModule } from './customes-routing.module';
import { CustomesComponent } from './customes.component';


@NgModule({
  declarations: [
    CustomesComponent
  ],
  imports: [
    CommonModule,
    CustomesRoutingModule
  ]
})
export class CustomesModule { }
