import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobPostsService } from 'src/app/services/job-posts.service';
import Province from '../../data/province.json';
import Cate from '../../data/category.json';
import JobP from '../../data/jobPosition.json';
import Exp from '../../data/experience.json';
import Salary from '../../data/salary.json'
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit{
  public provinceC = Province;
  public cate = Cate;
  public jobP = JobP;
  public exp = Exp;
  public removedExp = this.exp.splice(1,1)
  public salary = Salary;
  public genderC = ["Male", "Female", "Not required"]
  employer;
  private isDisabled: boolean = true;
  constructor(private postService: JobPostsService, private empService:EmployerService) {
  }

  createPostForm: FormGroup = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      label: new FormControl(''),
      category: new FormControl('', Validators.required),
      categoryCode: new FormControl(''),
      provinceCode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      recruitNumber: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      benefits: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    },
    { updateOn: 'submit' }
  );

  ngOnInit(): void {
    this.empService.GetEmployer().subscribe((data:any)=>{
      this.employer = data.response.statusCode
      console.log(this.employer);
      
    })
  }

  onCreate() {
    if (this.createPostForm.invalid) {
      console.log(this.createPostForm.value);
      return;
    } else {
      let u = this.findProvince(this.createPostForm.value.provinceCode);
      let i = this.findHeaderCate(this.createPostForm.value.category);
      
      this.createPostForm.patchValue({
        label : i[1] + " tại " + u,
        categoryCode: i[0]
      })
      console.log(this.createPostForm.value);

      this.postService.postCreate(this.createPostForm.value).subscribe(data =>{
        console.log(data);
        alert("Post created successful!!!")
      })
    }
  }


  findHeaderCate(str : string){
    let value = []
    for (let i of this.cate){
      if (i.value == str){
        value.push(i.code, i.header)
        break;
      }
    }
    return value
  }

  findProvince(str : string){
    let value = ""
    for (let i of this.provinceC){
      if (i.code == str){
        value = i.value
        break;
      }
    }
    return value
  }
}
