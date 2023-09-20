import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// const url = 'http://localhost:5000/api/';

export class EmployerService {

  constructor(private http: HttpClient) { }

  employerRegister(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/employer/signup', data);
  }
}
