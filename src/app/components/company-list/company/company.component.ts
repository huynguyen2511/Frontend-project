import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  company;
  companyId;
  companyList;
  constructor(private activatedRoute: ActivatedRoute, private userService:UserService){}

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.userService.getAllCompanies().subscribe(data =>{
      let arr = Object.values(data)
      this.companyList = arr[2]
      this.company = this.companyList.find(x => x.id == this.companyId);
      console.log(this.company);
      
    })
  }
}
