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
  numeratorVariables:Variables[] = []

  stepView = 1;

  constructor(
    private formBuilder: FormBuilder,
    private service: IndicatorService
  ) {
    this.createIndicatorForm = this.formBuilder.group({
      sectionFormOne: this.formBuilder.group({
        name_indicator: ['', Validators.required],
        variables: this.formBuilder.array([]),
      }),
      sectionFormTwo: this.formBuilder.group({
        active_patients: [false],
        egress_patients: [false],
        variables: this.formBuilder.array([]),
      }),
      sectionFormThree: this.formBuilder.group({
      }),
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
    return this.createIndicatorForm.get('sectionFormOne.variables') as FormArray;
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

  oneSectionFormValid(){
    return this.createIndicatorForm.get('sectionFormOne')?.valid;
  }

  twoSectionFormValid(){
    return this.createIndicatorForm.get('sectionFormTwo')?.valid;
  }

  threeSectionFormValid(){
    return this.createIndicatorForm.get('sectionFormThree')?.valid;
  }

  submitCreateIndicator() {
    if (this.createIndicatorForm.valid) {
      let selectedVariables:any = this.createIndicatorForm.get('variables') as FormArray;
      selectedVariables = selectedVariables.value

      this.nextView();
    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }

  submitCreateNumerator() {
    if (this.createIndicatorForm.valid) {
      let selectedVariables = this.createIndicatorForm.get('variables') as FormArray;
      selectedVariables = selectedVariables.value

    } else {
      // Muestra mensajes de error o realiza acciones necesarias para formularios no válidos
    }
  }

  removeVariable(index: number){
    this.variables.removeAt(index);
  }

  nextView(){
    if(this.stepView === 1){
      let selectedVariables:any = this.createIndicatorForm.get('sectionFormOne.variables') as FormArray;
      selectedVariables = selectedVariables.value

      selectedVariables.forEach((selectVariable: any) => {
        this.aviableVariables.forEach((aviableVariable:any) =>{
          if (selectVariable.value == aviableVariable.value){
            aviableVariable['viewOption'] = true;
            this.numeratorVariables.push(aviableVariable)
          }
        })
      });
    }

    this.stepView += 1;
  }

  previusView(){
    this.stepView -= 1;
  }


}
