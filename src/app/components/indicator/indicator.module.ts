import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    IndicatorRoutingModule
  ]
})
export class IndicatorModule { }
