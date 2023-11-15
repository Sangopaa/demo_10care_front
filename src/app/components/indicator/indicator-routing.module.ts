import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateIndicatorComponent } from './create-indicator/create-indicator.component';

const routes: Routes = [
  { path: 'create-indicator', component: CreateIndicatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndicatorRoutingModule { }
