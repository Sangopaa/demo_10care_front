import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Routing
import { VariableRoutingModule } from './variable-routing.module';

//Componentes declarados
import { CreateVariableComponent } from './create-variable/create-variable.component';


@NgModule({
  declarations: [CreateVariableComponent],
  imports: [
    CommonModule,
    VariableRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CreateVariableComponent]
})
export class VariableModule { }
