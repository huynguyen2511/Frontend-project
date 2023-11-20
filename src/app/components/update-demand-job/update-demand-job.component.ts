import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-demand-job',
  templateUrl: './update-demand-job.component.html',
  styleUrls: ['./update-demand-job.component.scss']
})
export class UpdateDemandJobComponent implements OnInit{

  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  gender = [
    {id: '1' , value: 'Male'},
    {id: '2' , value: 'Female'},
    {id: '3' , value: 'Other'},
  ]

  demandJobForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    birthYear: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    profession: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    englishLevel: new FormControl('', Validators.required),
    workLocation: new FormControl('', Validators.required),
    workForm: new FormControl('', Validators.required),
    desiredSalary: new FormControl('', Validators.required),
    mainCv: new FormControl('', Validators.required),
    homeTown: new FormControl(''),
    skill: new FormControl(''),
    wishes: new FormControl(''),
    introduce: new FormControl(''),
  },{ updateOn: 'submit' });


  onCreate(){
    if(this.demandJobForm.invalid){
      return;
    }
  }
}
