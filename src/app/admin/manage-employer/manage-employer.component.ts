import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  setStatusForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    status: new FormControl('')
  });

  selected;

  setStatus(status) {
    this.selected = status
  }
  
  saveStatus(id){
    console.log(id);
    this.setStatusForm.patchValue({
      id: id,
      status: this.selected
    });
    console.log(this.setStatusForm.value);
    this.adminService.setStatus(this.setStatusForm.value).subscribe((data:any)=>{
      if(data.err == 0){
        alert(data.mes)
      }else{
        alert('update fail')
      }
    })
  }
}
