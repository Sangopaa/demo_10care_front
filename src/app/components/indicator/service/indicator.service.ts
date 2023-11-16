import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  endpoint = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getVariableList() {
    return this.http.get<any>(`${this.endpoint}/list_variables`);
  }



}
