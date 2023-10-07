import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(private authService: AuthService, private router:Router) {}

  regisForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
    
  }

  onCreate(){
    this.authService.authRegis(this.regisForm.value).subscribe(data =>{
      console.log(data);
      alert("Register successfully");
      this.router.navigateByUrl('/')
    })
  }

  
}