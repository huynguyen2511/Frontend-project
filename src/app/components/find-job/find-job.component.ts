import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPostsService } from 'src/app/services/job-posts.service';
import Province from '../../data/province.json';
import Exp from '../../data/experience.json';
import Salary from '../../data/salary.json';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit{
  public province = Province;
  public exp = Exp.slice(1);
  public sal = Salary;
  
  jobLists : any
  constructor(private jobService: JobPostsService, private router:Router){
    this.jobService.getAllJobs().subscribe(data =>{
      let arr = Object.values(data)
      this.jobLists = arr[2]
      console.log(this.jobLists);
    })
  }

  ngOnInit(): void {
    
  }

  findForm: FormGroup = new FormGroup(
    {
      postition: new FormControl(''),
      province: new FormControl(''),
      workExperience:new FormControl(''),
      salary:new FormControl(''),
    },
  );

  onSubmit(): void{
    // this.router.navigate(['/find-job'], {queryParams:{sort:}})
    
  }
}
