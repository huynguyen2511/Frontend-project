import { Component, OnInit } from '@angular/core';
import fieldActivityData from '../../data/field-activity.json'
import size from '../../data/staff-size.json'

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit{
  public fieldData = fieldActivityData;
  public size = size;

  companyArr: any
  company:any

  companyUpdate: FormGroup = new FormGroup({
    companyName: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl('', Validators.required),
    taxCode: new FormControl('', Validators.required),
    field_of_activity: new FormControl('', Validators.required),
    staffSize: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    description: new FormControl('')
  }, {updateOn: 'submit'});

  constructor(private companyService: CompanyService) {
    this.companyService.GetCompany().subscribe(data => {
      this.companyArr = Object.values(data)
      for (let i of this.companyArr){
        this.company = i
      }
      this.companyUpdate.setValue({
        companyName: this.company.companyName,
        phone: this.company.phone,
        email: this.company.email,
        taxCode: this.company.taxCode,
        field_of_activity: this.company.field_of_activity,
        staffSize: this.company.staffSize,
        address: this.company.address,
        description: this.company.description
      })
    })
  }
  public ngOnInit(): void {
    
  }

  onCreate(){
    if(this.companyUpdate.invalid){
      return;
    }
    this.companyService.UpdateCompany(this.companyUpdate.value).subscribe((res: any) =>{
      alert("Update successful")
    });

  }
}