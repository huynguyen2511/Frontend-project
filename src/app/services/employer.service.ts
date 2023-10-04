import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, first } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})

// const url = 'http://localhost:5000/api/';

export class EmployerService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

}
