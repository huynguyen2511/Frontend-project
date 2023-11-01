import { Component, OnInit } from '@angular/core';
import { JobPostsService } from 'src/app/services/job-posts.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit{
  jobLists : any
  constructor(private jobService: JobPostsService){
    this.jobService.getAllJobs().subscribe(data =>{
      let arr = Object.values(data)
      this.jobLists = arr[2]
      console.log(this.jobLists);
      
    })
  }

  ngOnInit(): void {
    
  }
}
