import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostsService } from 'src/app/services/job-posts.service';
import Province from '../../../data/province.json';
import Exp from '../../../data/experience.json';
import Salary from '../../../data/salary.json';
import { Position } from '@cloudinary/url-gen/qualifiers';

@Component({
  selector: 'app-job-query',
  templateUrl: './job-query.component.html',
  styleUrls: ['./job-query.component.scss'],
})
export class JobQueryComponent implements OnInit {
  public pro = Province;
  public exp = Exp.slice(1);
  public sal = Salary;

  position: '';
  province: '';
  workExperience: '';
  salary: '';
  jobLists: any;
  randomJob;
  queryData;
  jobListQuery;
  constructor(
    private jobService: JobPostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data) => {
      this.jobLists = data.response;
      this.randomJob = this.jobLists[1]
      this.activatedRoute.queryParams.subscribe((params) => {
        this.queryData = params;
        if (params['pos'] != undefined && params['pos'] != '') {
          this.findForm.patchValue({
            position: this.queryData?.pos,
          });
          this.findQuery.patchValue({
            position: this.queryData?.pos,
          });
        } else {
          this.findQuery.patchValue({
            position: null,
          });
        }
        if (params['pro'] != undefined && params['pro'] != '') {
          this.findForm.patchValue({
            province: this.queryData?.pro,
          });
          this.findQuery.patchValue({
            province: this.queryData?.pro,
          });
        } else {
          this.findQuery.patchValue({
            province: null,
          });
        }
        if (params['exp'] != undefined && params['exp'] != '') {
          this.findForm.patchValue({
            workExperience: this.queryData?.exp,
          });
          this.findQuery.patchValue({
            workExperience: this.queryData?.exp,
          });
        } else {
          this.findQuery.patchValue({
            workExperience: null,
          });
        }
        if (params['sal'] != undefined && params['sal'] != '') {
          this.findForm.patchValue({
            salary: this.queryData?.sal,
          });
          this.findQuery.patchValue({
            salary: this.queryData?.sal,
          });
        } else {
          this.findQuery.patchValue({
            salary: null,
          });
        }

        console.log('findForm', this.findForm.value);
        console.log('findQuery', this.findQuery.value);
        this.jobService
          .getFilterJobs(
            this.findQuery.get('position')?.value,
            this.findQuery.get('province')?.value,
            this.findQuery.get('workExperience')?.value,
            this.findQuery.get('salary')?.value
          )
          .subscribe((data: any) => {
            console.log(data);
            this.jobListQuery = data.response;
          });
      });
    });
  }

  //this.postCv = this.applyCvList.find((x) => x.postAppliedCv.id == this.postId)

  findForm: FormGroup = new FormGroup({
    position: new FormControl(''),
    workExperience: new FormControl(''),
    province: new FormControl(''),
    salary: new FormControl(''),
  });

  findQuery: FormGroup = new FormGroup({
    position: new FormControl(''),
    workExperience: new FormControl(''),
    province: new FormControl(''),
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
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/find-query'], {
        queryParams: {
          pos: this.findForm.get('position')?.value,
          pro: this.findForm.get('province')?.value,
          exp: this.findForm.get('workExperience')?.value,
          sal: this.findForm.get('salary')?.value,
        },
        queryParamsHandling: '',
      });
    });
  }
}
