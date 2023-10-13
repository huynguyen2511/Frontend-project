import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {
  
   }

  GetCompany():Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "employer/getCompany", {headers:header_obj});
  }

  UpdateCompany(data):Observable<any>{
    let token = localStorage.getItem('Employer auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.put<any>(this.url + "employer/setting/updateCompany", data, {headers:header_obj});
  }
}
