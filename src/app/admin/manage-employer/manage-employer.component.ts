import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-employer',
  templateUrl: './manage-employer.component.html',
  styleUrls: ['./manage-employer.component.scss']
})
export class ManageEmployerComponent implements OnInit{
  employerArr:any
  constructor(private adminService:AdminService){}
  
  ngOnInit(): void {
    this.adminService.GetEmployers().subscribe(data => {
      let arr = Object.values(data)
      console.log(arr);
      
      this.employerArr = arr[2]
      console.log(this.employerArr);
      
    })
  }
}
