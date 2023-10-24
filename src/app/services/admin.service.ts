import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:5000/api/';
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)


  constructor(private http : HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) {
    const token = localStorage.getItem('Admin auth');
    if(!!token){
      this.loggedIn.next(true)
      this.loggedOut.next(false)
    }else{
      this.loggedIn.next(false)
      this.loggedOut.next(true)
    }
    
    
   }

  adminLogin(email :string, password: string): Observable<any>{
    return this.http.post<any>( 'http://localhost:5000/api/admin/login', {email , password}).pipe(
      tap(response =>{
        localStorage.setItem('Admin auth', response.access_token);
        this.loggedIn.next(true);
        this.loggedOut.next(false);
      })
    );
  }

  GetEmployers():Observable<any>{
    let token = localStorage.getItem('Admin auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "admin/getEmployers", {headers:header_obj});
  }

  public logout(): void{
    localStorage.removeItem('Admin auth');
    this.loggedIn.next(false)
    this.loggedOut.next(true)
    this.router.navigateByUrl('/adminlogin')
  }

  public isLoggedIn() : Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  public isLoggedOut() : Observable<boolean>{
    return this.loggedOut.asObservable();
  }
}
