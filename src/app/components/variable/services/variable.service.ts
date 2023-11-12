import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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


}
