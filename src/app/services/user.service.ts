import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  // GetUser():Observable<any>{
  //   let token = localStorage.getItem('User auth')
  //   let header_obj = new HttpHeaders().set("Authorization", token)
  //   return this.http.get<any>(this.url + "user/", {headers:header_obj});
  // }

  changePassword(data):Observable<any>{
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.put<any>(this.url + "user/changePassword", data, {headers:header_obj});
  }

  updateInfo(data):Observable<any>{
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.put<any>(this.url + "user/updateInfo", data, {headers:header_obj});
  }

  getAllCompanies():Observable<any>{
    return this.http.get<any>(this.url + "user/allCompanies");
  }

  uploadCv(file: File):Observable<any> {
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    let formData  = new FormData();
    formData.append('cv_document', file)
    return this.http.post<any>(this.url + 'user/createCv', formData ,{headers:header_obj})
  }
  getUserCvs():Observable<any>{
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "user/getUserCvs", {headers:header_obj});
  }

  updateMainCv(data):Observable<any>{
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.put<any>(this.url + "user/setMainCv", data, {headers:header_obj});
  }
}
