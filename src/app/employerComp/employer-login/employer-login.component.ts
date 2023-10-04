import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerAuthService } from 'src/app/services/employer-auth.service';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.scss']
})
export class EmployerLoginComponent implements OnInit{

  
  constructor(private employerAuthService: EmployerAuthService, private router:Router) {}

  employerLoginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }, {updateOn: 'submit'});

  ngOnInit(): void {
    
  }

  onCreate(){
    if(this.employerLoginForm.invalid){
      return;
    }
    
    this.employerAuthService.employerLogin(this.employerLoginForm.value).subscribe((res: any) =>{
      console.log(res);
        this.router.navigateByUrl('/dashboard')
      });
  }
}
