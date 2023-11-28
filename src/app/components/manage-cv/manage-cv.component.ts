import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-cv',
  templateUrl: './manage-cv.component.html',
  styleUrls: ['./manage-cv.component.scss'],
})
export class ManageCvComponent implements OnInit {

  user: any
  cvList : any
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.GetUser().subscribe((data) => {
      let arr = Object.values(data);
      this.user = arr[2];
    });
    this.userService.getUserCvs().subscribe(data =>{
      let arr = Object.values(data)
      if(arr[2] == ''){
        return
      }else{
        this.cvList = arr[2]
        console.log(this.cvList);
      }
    })
  }

  mainCvForm: FormGroup = new FormGroup({
    cvId: new FormControl('')
  })

  setCvMain(id){
    this.mainCvForm.patchValue({
      cvId : id
    })
    this.userService.updateMainCv(this.mainCvForm.value).subscribe((res: any) =>{
      console.log(res);
      window.location.reload();
      alert('Set main Cv successful')
    })
  }

  deleteCv(id){
    this.userService.deleteCv(id).subscribe((data:any) =>{
      console.log(data);
      if (data.err ==0){
        alert('Cv deleted successful')
        window.location.reload()
      }else{
        alert('Delete Cv failed')
      }
    })
  }
}
