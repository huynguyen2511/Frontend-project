import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(private authService: AuthService) {}

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
      
    })
  }

  
}