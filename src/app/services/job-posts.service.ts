import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class JobPostsService {
  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

  postCreate(data): Observable<any> {
    let token = localStorage.getItem('Employer auth');
    let header_obj = new HttpHeaders().set('Authorization', token);
    return this.http.post<any>(this.url + 'post/create-new', data, {
      headers: header_obj,
    });
  }

  getAllJobs(): Observable<any> {
    return this.http.get<any>(this.url + 'post/allPosts');
  }

  getFilterJobs(
    position: string,
    province: string,
    workExperience: string,
    salary: string
  ): Observable<any> {
    const params = new HttpParams()
      .set('position', position)
      .set('province', province)
      .set('workExperience', workExperience)
      .set('salary', salary);
    return this.http.get<any>(this.url + 'post/searchedPosts', {params});
  }
}
