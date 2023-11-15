import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  endpoint = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getVariableList() {
    return this.http.get<any>(`${this.endpoint}/list_variables`);
  }

  getTypeVariable() {
    return this.http.get<any>(`${this.endpoint}/list_type_variable`);
  }

  createVariable(data:any){
    // console.log(data);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Puedes agregar otros encabezados según sea necesario
    });

    return this.http.post<any>(`${this.endpoint}/create_variable`, data, { headers });
  }

}
