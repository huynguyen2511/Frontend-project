import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-applied-cv',
  templateUrl: './applied-cv.component.html',
  styleUrls: ['./applied-cv.component.scss']
})
export class AppliedCvComponent implements OnInit{
  appliedList: any;
  list: any;
  selected;
  isDisabled: boolean = true;
  constructor(private empService: EmployerService){
  }
  ngOnInit(): void {
    this.empService.getAppliedCvs().subscribe((res: any) => {
      this.appliedList = res.response;
      
      if (
        typeof this.appliedList != 'undefined' &&
        this.appliedList != null &&
        this.appliedList.length != null &&
        this.appliedList.length > 0
      ) {
        this.list = 1;
      } else {
        this.list = 0;
      }
    });
  }
  setStatusForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    status: new FormControl('')
  });
  setStatus(status) {
    this.selected = status
    if (this.isDisabled == true) {
      this.isDisabled = false;
    }
  }
  saveStatus(id){
    this.setStatusForm.patchValue({
      id: id,
      status: this.selected
    });
    this.empService.setStatus(this.setStatusForm.value).subscribe((data:any)=>{
      if(data.err == 0){
        alert(data.mes)
        if (this.isDisabled == false) {
          this.isDisabled = true;
        }
      }else{
        alert('update fail')
      }
    })
  }
}
