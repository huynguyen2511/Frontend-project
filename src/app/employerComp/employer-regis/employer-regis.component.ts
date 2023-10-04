import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployerAuthService } from "src/app/services/employer-auth.service";


@Component({
  selector: 'app-employer-regis',
  templateUrl: './employer-regis.component.html',
  styleUrls: ['./employer-regis.component.scss']
})
export class EmployerRegisComponent implements OnInit {
  
  constructor(private employerAuthService: EmployerAuthService) {}

  employerRegisForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    sex: new FormControl(),
    phone: new FormControl(),
    jobPosition: new FormControl(),
    workLocation: new FormControl(),
    district: new FormControl(),
  });

  ngOnInit(): void {
    
  }

  onCreate(){
    this.employerAuthService.employerRegister(this.employerRegisForm.value).subscribe(data =>{
      console.log(data);
      
    })
  }

  
}
