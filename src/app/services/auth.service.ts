import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http : HttpClient, private errorHandlerService: ErrorHandlerService) { }

  authLogin(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/login', data).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<any>("login"))
    );
  }

  authRegis(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/register', data).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<any>("login"))
    );
  }

}
