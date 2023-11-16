import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Routing
import { IndicatorRoutingModule } from './indicator-routing.module';

//Componentes declarados
import { CreateIndicatorComponent } from './create-indicator/create-indicator.component';

@NgModule({
  declarations: [
    CreateIndicatorComponent
  ],
  imports: [
    CommonModule,
    IndicatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndicatorModule { }
