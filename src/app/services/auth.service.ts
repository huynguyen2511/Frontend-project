import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:5000/api/v1/auth/register";

  httpOptions: { headers:HttpHeaders } = {
    headers: new HttpHeaders({"Content-type" : "application/json"})
  };

  constructor(private http : HttpClient, private errorHandlerService: ErrorHandlerService) { }

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<User>("signup"))
    )
  }

}
