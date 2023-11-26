import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post;
  postId;
  appliedList: any;
  cvList: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private empService: EmployerService
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.empService.getPostById().subscribe((data:any) =>{
      let arr = data.response
      this.post = arr.find((x) => x.id == this.postId)
      console.log(this.post);
    })


    this.empService.getAppliedCvs().subscribe((res: any) => {   
      this.cvList = res.response;
      let arr = new Array();
      for (var i = 0; i < this.cvList.length; i++) {
        if (this.cvList[i].postAppliedCv.id != this.postId) {
          console.log(i, this.cvList[i], this.postId);
        }else{
          arr.push(this.cvList[i]);
        }
      }
      this.appliedList = arr
      console.log(this.appliedList);
    });
  }

  selected;
  isDisabled: boolean = true;

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
