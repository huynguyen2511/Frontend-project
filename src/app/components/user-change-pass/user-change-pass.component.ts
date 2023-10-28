import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-change-pass',
  templateUrl: './user-change-pass.component.html',
  styleUrls: ['./user-change-pass.component.scss']
})
export class UserChangePassComponent implements OnInit{

  user:any;
  constructor(private userService: UserService){
  }
  ngOnInit(): void {
    this.userService.GetUser().subscribe(data => {
      let arr = Object.values(data)
      this.user = arr[2]
      
      
      this.updatePassword.patchValue({
        email : this.user.email
      })
      console.log(this.updatePassword.value);

      this.updatePassword.get('email').disable()
    })
  }

  updatePassword: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.minLength(6)),
    enterAgain: new FormControl(''),
  }, {updateOn: 'submit'});



  onCreate(values){
    if(this.updatePassword.invalid){
      return;
    }else if(values.newPassword !== values.enterAgain){
      alert('Re-enter the new password incorrectly')
    } else {
      delete values.enterAgain;
      console.log(values);
      this.userService.changePassword(values).subscribe((res: any) =>{
        console.log(res);
        alert("Updated password successfully")
      });
    }  
    
  }
}
