import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { JobPostsService } from 'src/app/services/job-posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  post;
  postId;
  jobList;

  postCv;
  applyCvList;
  applied;
  
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobPostsService,
    private userService: UserService,
    private authService: AuthService,
    private router:Router 
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.isLoggedOut$ = this.authService.isLoggedOut();
  }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.jobService.getAllJobs().subscribe((data) => {
      let arr = Object.values(data);
      this.jobList = arr[2];
      this.post = this.jobList.find((x) => x.id == this.postId);
      console.log('1',this.post);
      
    });
    this.userService.getAppliedPosts().subscribe((res: any) =>{
      this.applyCvList = res.response
      this.postCv = this.applyCvList.find((x) => x.postAppliedCv.id == this.postId)
      console.log('2',this.postCv);
      
      if(this.postCv != undefined){
        let i = this.postCv.status;
        if(i == 'Refused'){
          this.applied = 1
          console.log(this.applied);
        }else{
          this.applied = 2
          console.log(this.applied);
        }
      }else{
        this.applied = 0
        console.log(this.applied);
      }
      
    })
    this.count = 0
  }

  applyCvForm: FormGroup = new FormGroup({
    employerId: new FormControl(''),
    jobPostId: new FormControl(''),
  });

  apply(value) {
    this.applyCvForm.patchValue({
      employerId: value,
      jobPostId: this.postId,
    });
    this.userService.applyCv(this.applyCvForm.value).subscribe((res: any)=>{
      if(res.err == 0){
        alert("CV submitted successfully");
        window.location.reload()
      }else{
        alert(res.mes)
        return
      }
    })
  }

  reApply() {
    this.applyCvForm.patchValue({
      jobPostId: this.postId,
    });
    console.log(this.applyCvForm);
    
    this.userService.reApplyCv(this.applyCvForm.value).subscribe((res: any)=>{
      if(res.err == 0){
        alert("CV re-submitted successfully");
        window.location.reload()
      }else{
        alert(res.mes)
        return
      }
    })
  }

  login(){
    this.router.navigateByUrl('login')
  }


  count : number;
  annoy(){
    this.count = this.count + 1;
    if(this.count == 10){
      alert('Nothing will happen if you keep clicking, trust me')
    }
    if(this.count == 15){
      alert('Please stop :((')
    }
    if(this.count == 20){
      alert("Do what ever you what i don't care >:(( ")
    }
  }
}
