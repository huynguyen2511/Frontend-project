import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, first } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { JobPost } from '../models/JobPost';
import { Employer } from '../models/Employer';


@Injectable({
  providedIn: 'root'
})



export class EmployerService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
   }


  GetEmployer():Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "employer/", {headers:header_obj});
  }

  UpdateEmployer(data):Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.put<any>(this.url + "employer/updateEmployer", data, {headers:header_obj});
  }

  uploadLicense(file: File):Observable<any> {
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    let formData  = new FormData();
    formData .append('related_documents', file)
    
    // formParams.append('additional_documents', additionalFile)
    return this.http.put<any>(this.url + 'employer/setting/updateLicense', formData ,{headers:header_obj})
  }

  getLicense():Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "employer/getLicense", {headers:header_obj});
  }


}
