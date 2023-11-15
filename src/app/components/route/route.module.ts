import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { RouteRoutingModule } from './route-routing.module';

//Componentes declarados
import { CreateRouteComponent } from './create-route/create-route.component';

@NgModule({
  declarations: [
    CreateRouteComponent
  ],
  imports: [
    CommonModule,
    RouteRoutingModule
  ]
})
export class RouteModule { }
