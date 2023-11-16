import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Variables } from '../interfaces/variables';
import { IndicatorService } from '../service/indicator.service';

@Component({
  selector: 'app-create-indicator',
  templateUrl: './create-indicator.component.html',
  styleUrls: ['./create-indicator.component.scss']
})
export class CreateIndicatorComponent {
  createIndicatorForm: FormGroup;
  aviableVariables:Variables[] = []

  constructor(
    private formBuilder: FormBuilder,
    private service: IndicatorService
  ) {
    this.createIndicatorForm = this.formBuilder.group({
      name_indicator: ['', Validators.required],
      variables: this.formBuilder.array([]),
    });

    this.addVariable()
  }

  ngOnInit(){
    this.service.getVariableList().subscribe(
      (response: any) => {
        this.aviableVariables = response.variables.map((item: any) => ({
          value: item.id_variable,
          label: item.name_variable,
        }));
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );

  }

  get variables(): FormArray {
    return this.createIndicatorForm.get('variables') as FormArray;
  }

  createVariable(): FormGroup {
    return this.formBuilder.group({
      value: ['', Validators.required],
    });
  }

  addVariable() {
    const newVariable = this.createVariable();
    this.variables.push(newVariable);
  }

  submitForm() {
    if (this.createIndicatorForm.valid) {
      console.log(this.createIndicatorForm.value);
    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }

  removeVariable(index: number){
    this.variables.removeAt(index);
  }

}
