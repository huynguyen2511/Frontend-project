import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  url = 'http://localhost:5000/api/';

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {
    const token = localStorage.getItem('User auth');
    if (token) {
      this.loggedIn.next(true);
      this.loggedOut.next(false);
    } else {
      this.loggedIn.next(false);
      this.loggedOut.next(true);
    }
  }

  ngOnInit(): void {
  }

  authLogin(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:5000/api/auth/login', { email, password })
      .pipe(
        tap((response) => {
          if (response.err == 0) {
            localStorage.setItem('User auth', response.access_token);
            this.loggedIn.next(true);
            this.loggedOut.next(false);
          } else {
            this.loggedIn.next(false);
            this.loggedOut.next(true);
          }
        })
      );
  }

  authRegis(data: any): Observable<any> {
    return this.http
      .post<any>('http://localhost:5000/api/auth/register', data)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handlerError<any>('register'))
      );
  }

  GetUser(): Observable<User> {
    let token = localStorage.getItem('User auth');
    let header_obj = new HttpHeaders().set('Authorization', token);
    return this.http.get<any>(this.url + 'user/', { headers: header_obj }).pipe(
      catchError((err) => {
        let Error = err.error;
        if (Error.err == 1 || Error.err == 2) {
          localStorage.removeItem('User auth');
          this.loggedIn.next(false);
          this.loggedOut.next(true);
        }
        return throwError(err);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('User auth');
    this.loggedIn.next(false);
    this.loggedOut.next(true);
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  public isLoggedOut(): Observable<boolean> {
    return this.loggedOut.asObservable();
  }
}
