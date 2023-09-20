import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, first } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})

// const url = 'http://localhost:5000/api/';

export class EmployerService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  employerRegister(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/employer/signup', data).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<any>("login"))
    );
  }

  employerLogin(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/employer/login', data).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<any>("login"))
    );
  }
}
