import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit{
  companyLists : any

  constructor(private userService: UserService){
    this.userService.getAllCompanies().subscribe(data =>{
      let arr = Object.values(data)
      this.companyLists = arr[2]
    })
  }

  ngOnInit(): void {
    
  }
}
