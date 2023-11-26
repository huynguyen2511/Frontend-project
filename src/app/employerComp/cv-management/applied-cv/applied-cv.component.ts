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
      console.log(this.appliedList);
      
      if (
        typeof this.appliedList != 'undefined' &&
        this.appliedList != null &&
        this.appliedList.length != null &&
        this.appliedList.length > 0
      ) {
        this.list = 1;
        console.log(this.list);
      } else {
        this.list = 0;
        console.log(this.list);
      }
    });
  }
  setStatusForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    status: new FormControl('')
  });
  setStatus(status) {
    this.selected = status
    console.log(this.selected);
    if (this.isDisabled == true) {
      this.isDisabled = false;
    }
  }
  saveStatus(id){
    console.log(id);
    this.setStatusForm.patchValue({
      id: id,
      status: this.selected
    });
    console.log(this.setStatusForm.value);
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
