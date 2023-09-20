import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  constructor(private authService: AuthService, private router:Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl,
    password: new FormControl(),
  });

  ngOnInit(): void {
    
  }

  onCreate(){
    this.authService.authLogin(this.loginForm.value).subscribe(data =>{
      console.log(data);

      if(data.status){
        alert("Login successful");
        this.router.navigateByUrl('/employer')
      }
      else{
        alert("Incorrect email or password");
        console.log("Error Login");
      }
    })
  }
} 
