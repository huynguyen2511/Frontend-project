import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit{
  employer;
  numberCv;
  numberPost;
  constructor(private empService: EmployerService){}
  ngOnInit(): void {
    this.empService.GetEmployer().subscribe((data:any) =>{
      this.employer = data.response
      console.log(this.employer);
      
    })
    this.empService.getPostById().subscribe((data:any) =>{
      this.numberPost = data.response.length
      console.log(this.numberPost);
      
    })
    this.empService.getAppliedCvs().subscribe((data:any) =>{
      this.numberCv = data.response.length
      console.log(this.numberCv);
      
    })
  }
}
