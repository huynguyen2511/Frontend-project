import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError, first, tap, throwError } from 'rxjs';
// import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployerAuthService {
  url = 'http://localhost:5000/api/';

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor(
    private http: HttpClient,
    // private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {
    const token = localStorage.getItem('Employer auth');
    if (token) {
      this.loggedIn.next(true);
      this.loggedOut.next(false);
    } else {
      this.loggedIn.next(false);
      this.loggedOut.next(true);
    }
  }

  employerRegister(data): Observable<any> {
    return this.http
      .post<any>('http://localhost:5000/api/auth/employer/signup', data)
      
  }

  employerLogin(data): Observable<any> {
    return this.http
      .post<any>('http://localhost:5000/api/auth/employer/login', data)
      .pipe(
        tap((response) => {
          if (response.err == 0) {
            localStorage.setItem('Employer auth', response.access_token);
            this.loggedIn.next(true);
            this.loggedOut.next(false);
          } else {
            this.loggedIn.next(false);
            this.loggedOut.next(true);
            return;
          }
        })
      );
  }

  CheckToken():Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "employer/", {headers:header_obj}).pipe(
      catchError((err) => {
        let Error = err.error;
        if (Error.err == 1) {
          localStorage.removeItem('Employer auth');
          this.loggedIn.next(false);
          this.loggedOut.next(true);
        }
        return throwError(err);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('Employer auth');
    this.loggedIn.next(false);
    this.loggedOut.next(true);
    this.router.navigateByUrl('/employerlogin');
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  public isLoggedOut(): Observable<boolean> {
    return this.loggedOut.asObservable();
  }
}
