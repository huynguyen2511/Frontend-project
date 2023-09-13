import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  name : string ="";
  email: string ="";
  password : string ="";
  avatar : string ="";

  constructor (private http : HttpClient) {}

  ngOnInit(): void {
    
  }

  signup()
  {
    let bodydata = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password
    } ;
    this.http.post("http://localhost:5000/api/v1/auth/register", bodydata).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Registation Successfully")
    });
  }

  save(){
    this.signup();
  }
}
