import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit{
  user:any;
  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.GetUser().subscribe(data => {
      let arr = Object.values(data)
      this.user = arr[2]
      
      this.updateInfo.patchValue({
        email : this.user.email,
        name : this.user.name
      })
      console.log(this.updateInfo.value);
      this.updateInfo.get('email').disable()
      console.log(this.updateInfo.value);
    })
  }
  updateInfo: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.minLength(10) && Validators.maxLength(10)),
    email: new FormControl('')
  }, {updateOn: 'submit'}); 

  onCreate(values){
    if(this.updateInfo.invalid){
      return;
    }else{
      console.log(values);
      this.userService.updateInfo(values).subscribe((res: any) =>{
        console.log(res);
        alert("Updated personal information successfully")
      });
    }
  }
}
