import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostsService } from 'src/app/services/job-posts.service';
import Province from '../../data/province.json';
import Exp from '../../data/experience.json';
import Salary from '../../data/salary.json';
import { Position } from '@cloudinary/url-gen/qualifiers';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss'],
})
export class FindJobComponent implements OnInit {
  public pro = Province;
  public exp = Exp.slice(1);
  public sal = Salary;
  randomJob;
  jobLists: any;

  constructor(private jobService: JobPostsService, private router: Router) {
    this.jobService.getAllJobs().subscribe((data) => {
      this.jobLists = data.response;
      this.randomJob = this.jobLists[1]
      console.log(this.randomJob);
      
    });
  }

  ngOnInit(): void {
  }

  findForm: FormGroup = new FormGroup({
    position: new FormControl(''),
    province: new FormControl(''),
    workExperience: new FormControl(''),
    salary: new FormControl(''),
  });

  onSubmit(): void {
    if (this.findForm.get('position').value == '') {
      this.findForm.removeControl('position'); 
    }
    if (this.findForm.get('province').value == '') {
      this.findForm.removeControl('province'); 
    }
    if (this.findForm.get('workExperience').value == '') {
      this.findForm.removeControl('workExperience'); 
    }
    if (this.findForm.get('salary').value == '') {
      this.findForm.removeControl('salary'); 
    }
    console.log(this.findForm.value);
    this.router.navigate(['/find-query'], {
      queryParams: {
        pos: this.findForm.get('position')?.value,
        pro: this.findForm.get('province')?.value,
        exp: this.findForm.get('workExperience')?.value,
        sal: this.findForm.get('salary')?.value,
      }
    });
  }
}
