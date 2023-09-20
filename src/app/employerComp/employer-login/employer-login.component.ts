import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.scss']
})
export class EmployerLoginComponent implements OnInit{

  
  constructor(private employerService: EmployerService, private router:Router) {}

  employerLoginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    
  }

  onCreate(){
    this.employerService.employerLogin(this.employerLoginForm.value).subscribe(data =>{
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
