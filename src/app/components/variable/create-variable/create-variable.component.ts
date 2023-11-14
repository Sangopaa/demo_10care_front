import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { VariableService } from '../services/variable.service';
import { typeVariables } from '../interfaces/type_variables';

@Component({
  selector: 'app-create-variable',
  templateUrl: './create-variable.component.html',
  styleUrls: ['./create-variable.component.scss'],
})
export class CreateVariableComponent implements OnInit {
  createVariableForm: FormGroup;

  typesVariables: typeVariables[] = [];
  type_variable = 0;

  constructor(
    private formBuilder: FormBuilder,
    private service: VariableService
  ) {
    this.createVariableForm = this.formBuilder.group({
      value_data_type: ['', Validators.required],
      name_variable: ['', Validators.required],
      options: this.formBuilder.array([]),
    });
  }

  ngOnInit() {
    this.service.getTypeVariable().subscribe(
      (response: any) => {
        this.typesVariables = response.type_variable.map((item: any) => ({
          value: Number(item.type_variable),
          label: item.name_tipe_variable,
        }));
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  createOption(): FormGroup {
    return this.formBuilder.group({
      value: ['', Validators.required],
    });
  }

  get options(): FormArray {
    return this.createVariableForm.get('options') as FormArray;
  }

  addOption() {
    const newOption = this.createOption();
    this.options.push(newOption);
  }

  submitForm() {
    if (this.createVariableForm.valid) {
      if (this.type_variable === 5) {
        console.log('chao', this.createVariableForm.value);
      }
    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }

  viewCreateOptions(){
    const valueDataType = Number(this.createVariableForm.get('value_data_type')?.value);
    this.type_variable = valueDataType;

    if (this.type_variable === 5) {
      this.addOption()
    }
  }
}
