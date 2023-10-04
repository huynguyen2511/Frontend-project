import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError, first, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployerAuthService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router)  { 
    const token = localStorage.getItem('Employer auth');
    if(!!token){
      this.loggedIn.next(true)
      this.loggedOut.next(false)
    }else{
      this.loggedIn.next(false)
      this.loggedOut.next(true)
    }

    
  }

  employerRegister(data: any): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/employer/signup', data).pipe(
      first(),
      catchError(this.errorHandlerService.handlerError<any>("signup"))
    );
  }

  employerLogin(data): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/auth/employer/login', data).pipe(
      tap(response =>{
        localStorage.setItem('Employer auth', response.access_token);
        this.loggedIn.next(true);
        this.loggedOut.next(false);
      })
    );
  }

  public logout(): void{
    localStorage.removeItem('Employer auth');
    this.loggedIn.next(false)
    this.loggedOut.next(true)
    this.router.navigateByUrl('/employerlogin')
  }

  public isLoggedIn() : Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  public isLoggedOut() : Observable<boolean>{
    return this.loggedOut.asObservable();
  }
}
