import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableService } from '../services/variable.service';
import { typeVariables } from '../interfaces/type_variables';

@Component({
  selector: 'app-create-variable',
  templateUrl: './create-variable.component.html',
  styleUrls: ['./create-variable.component.scss'],
})
export class CreateVariableComponent {
  createVariableForm: FormGroup;

  opcionesSelect:typeVariables[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private service: VariableService
  ) {
    this.createVariableForm = this.formBuilder.group({
      value_data_type: ['', Validators.required],
      name_variable: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service.getTypeVariable().subscribe(
      (response: any) => {
        // Maneja la respuesta exitosa

        this.opcionesSelect = response.type_variable.map((item: any) => ({
          value: Number(item.type_variable),
          label: item.name_tipe_variable,
        }));
      },
      (error) => {
        // Maneja el error
        console.error('Error al obtener datos:', error);
      }
    );
  }

  submitForm() {
    if (this.createVariableForm.valid) {
      // Realiza acciones con los datos del formulario
      const valueDataType = Number(this.createVariableForm.get('value_data_type')?.value);

      if(valueDataType === 5){
        console.log('holaa');
      }
    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }
}
