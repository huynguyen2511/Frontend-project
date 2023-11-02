import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPostsService } from 'src/app/services/job-posts.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit{
  post;
  postId;
  jobLists;
  constructor(private activatedRoute: ActivatedRoute, private jobService: JobPostsService){
  }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.jobService.getAllJobs().subscribe(data =>{
      let arr = Object.values(data)
      this.jobLists = arr[2]
      console.log(this.jobLists);
      this.post = this.jobLists.find(x => x.id == this.postId);
      console.log(this.post);
    })
    
  }
}
