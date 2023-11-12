import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableService } from '../services/variable.service';

@Component({
  selector: 'app-create-variable',
  templateUrl: './create-variable.component.html',
  styleUrls: ['./create-variable.component.scss'],
})
export class CreateVariableComponent {
  createVariableForm: FormGroup;

  opcionesSelect = [
    { value: '', label: '' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: VariableService
  ) {
    this.createVariableForm = this.formBuilder.group({
      data_variable: ['', Validators.required],
      name_variable: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service.getTypeVariable().subscribe(
      (response: any) => {
        // Maneja la respuesta exitosa

        this.opcionesSelect = response.type_variable.map((item: any) => ({
          value: item.type_variable.toString(),
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
      console.log('Formulario válido:', this.createVariableForm.value);
    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }
}
