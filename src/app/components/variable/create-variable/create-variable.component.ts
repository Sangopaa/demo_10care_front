import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-variable',
  templateUrl: './create-variable.component.html',
  styleUrls: ['./create-variable.component.scss']
})
export class CreateVariableComponent {

  createVariableForm: FormGroup;

  opcionesSelect = [
    { value: 'number', label: 'Número' },
    { value: 'text', label: 'Texto' },
    { value: 'select', label: 'Selección multiple' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createVariableForm = this.formBuilder.group({
      data_variable: ['', Validators.required],
      name_variable: ['', Validators.required],
    });
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
