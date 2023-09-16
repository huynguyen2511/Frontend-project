import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email: string ="";
  password : string ="";

  isLogin: boolean = true;

  errorMsg: string = "";

  constructor (private router:Router ,private http : HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    
    let bodyData={
      email : this.email,
      password: this.password
    };

    this.http.post("http://localhost:5000/api/v1/auth/login", bodyData).subscribe((resultData: any) =>{
      console.log(resultData);

      if(resultData.status){

        this.router.navigateByUrl('')
      }
      else{
        alert("Incorrect email or password");
        console.log("Error Login");
        
      }
    })
  }
} 
