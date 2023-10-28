import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  GetUser():Observable<any>{
    let token = localStorage.getItem('User auth')
    let header_obj = new HttpHeaders().set("Authorization", token)
    return this.http.get<any>(this.url + "user/", {headers:header_obj});
  }

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
}
