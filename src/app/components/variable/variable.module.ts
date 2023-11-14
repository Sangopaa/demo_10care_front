import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Routing
import { VariableRoutingModule } from './variable-routing.module';

//Componentes declarados
import { CreateVariableComponent } from './create-variable/create-variable.component';


@NgModule({
  declarations: [CreateVariableComponent],
  imports: [
    CommonModule,
    VariableRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CreateVariableComponent]
})
export class VariableModule { }
