import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-jobseeker',
  templateUrl: './manage-jobseeker.component.html',
  styleUrls: ['./manage-jobseeker.component.scss']
})
export class ManageJobseekerComponent implements OnInit{
  userArr:any
  constructor(private adminService:AdminService){}
  
  ngOnInit(): void {
    this.adminService.GetUsers().subscribe(data => {
      this.userArr = data.response
      console.log(this.userArr);
    })
  }
}
