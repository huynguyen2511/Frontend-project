import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { EmployerService } from 'src/app/services/employer.service';
import jobposition from  "../data/jobPosition.json"

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.scss']
})
export class EmployerInfoComponent implements OnInit{
  public jobC = jobposition;
  public genderC = ["Male", "Female"]

  employer:any
  
  employerUpdate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    jobPosition: new FormControl('', Validators.required),
  }, {updateOn: 'submit'});


  constructor(private employerService: EmployerService) {
    this.employerService.GetEmployer().subscribe(data => {
      let arr = Object.values(data)
      console.log(arr);
      
      this.employer = arr[0]
      console.log(this.employer);
      
      this.employerUpdate.setValue({
        name : this.employer.name,
        phone : this.employer.phone,
        gender : this.employer.gender,
        jobPosition : this.employer.jobPosition,
      })
    })
  }
  public ngOnInit(): void {
    
  }

  onCreate(){
    if(this.employerUpdate.invalid){
      return;
    }
    console.log(this.employerUpdate.value);
    
    this.employerService.UpdateEmployer(this.employerUpdate.value).subscribe((res: any) =>{
      console.log(res);
      alert("Update successful")
    });
  }

}
