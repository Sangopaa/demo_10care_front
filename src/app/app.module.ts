import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableModule } from './components/variable/variable.module';

//Modulos creados
import { NavbarModule } from './components/navbar/navbar.module';
import { RouteModule } from './components/route/route.module';
import { IndicatorModule } from './components/indicator/indicator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VariableModule,
    HttpClientModule,
    NavbarModule,
    RouteModule,
    IndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
