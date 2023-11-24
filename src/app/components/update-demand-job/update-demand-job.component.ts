import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Exp from '../../data/experience.json';
import Cate from '../../data/category.json';
import Salary from '../../data/salary.json';
import Province from '../../data/province.json';

@Component({
  selector: 'app-update-demand-job',
  templateUrl: './update-demand-job.component.html',
  styleUrls: ['./update-demand-job.component.scss'],
})
export class UpdateDemandJobComponent implements OnInit {
  public exp = Exp.slice(1);
  public years = [];
  public cate = Cate;
  public sal = Salary;
  public province = Province;
  public gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];
  public qualifi = ['Student', 'Just graduated from school', 'Experienced', 'Leader', 'Supervisor/ Manager', 'Expert', 'Director']
  public engLevel = ["Don't know", 'Basic reading comprehension', 'Read/write professional documents well', 'Good communication', 'Master all skills']
  public workform = ["Don't know", 'Basic reading comprehension', 'Read/write professional documents well', 'Good communication', 'Master all skills']


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.years = this.getYears(1920);
  }

  demandJobForm: FormGroup = new FormGroup(
    {
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
      homeTown: new FormControl(''),
      wishes: new FormControl(''),
      introduce: new FormControl(''),
    },
    { updateOn: 'submit' }
  );

  onCreate() {
    if (this.demandJobForm.invalid) {
      return;
    }else{
      console.log(this.demandJobForm.value);
      
    }

  }

  getYears(startYear: number) {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;
    var allowYear = currentYear - 16;
    while (startYear <= allowYear) {
      years.push(startYear++);
    }
    return years;
  }
}
