import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class JobPostsService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
   }

  postCreate(data):Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.post<any>(this.url + "post/create-new", data, {headers:header_obj});
  }
}
