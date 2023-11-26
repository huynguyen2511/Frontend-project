import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companyLists: any;
  queryData;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  searchedCompany;
  ngOnInit(): void {
    this.userService.getAllCompanies().subscribe((data) => {
      this.companyLists = data.response;
      this.activatedRoute.queryParams.subscribe((params) => {
        this.queryData = params;
        if(this.queryData.name != '' && this.queryData.name){
          this.userService.getCompanyByName(this.queryData.name).subscribe((data:any) =>{
            console.log(data);
            this.searchedCompany = data.response
          })
        }else if(!this.queryData.name){
          this.searchedCompany = this.companyLists
        }
      });
    });
  }

  findForm: FormGroup = new FormGroup({
    companyName: new FormControl(''),
  });

  findCompany(){
    console.log(this.findForm.get('companyName').value);
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/company-list'], {
        queryParams: {
          name: this.findForm.get('companyName')?.value
        },
        queryParamsHandling: '',
      });
    });
  }
  
}
