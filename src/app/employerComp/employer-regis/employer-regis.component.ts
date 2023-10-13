import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployerAuthService } from "src/app/services/employer-auth.service";
import jobposition from  "../data/jobPosition.json"
import Province from  "../data/province.json"



@Component({
  selector: 'app-employer-regis',
  templateUrl: './employer-regis.component.html',
  styleUrls: ['./employer-regis.component.scss']
})
export class EmployerRegisComponent implements OnInit {
  public jobC = jobposition;
  public provinceC = Province;
  public genderC = ["Male", "Female"]
  constructor(private employerAuthService: EmployerAuthService, private router:Router) {}

  employerRegisForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gender: new FormControl(Validators.required),
    phone: new FormControl('', Validators.required),
    jobPosition: new FormControl(Validators.required),
    companyName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    provinceCode: new FormControl(Validators.required),
  }, {updateOn: 'submit'});

  ngOnInit(): void {
    
  }

  onCreate(){
    if(this.employerRegisForm.invalid){
      console.log(this.employerRegisForm.value);
      return;
    }else{
      let i = this.findCode(this.employerRegisForm.value.provinceCode);
      this.employerRegisForm.patchValue({
        provinceCode : i
      })
      console.log(this.employerRegisForm.value);
      this.employerAuthService.employerRegister(this.employerRegisForm.value).subscribe(data =>{
        console.log(data);
        alert("Register successful!!!")
        this.router.navigateByUrl('/employerlogin')
      })
    }
  }

  findCode(str : string){
    let code = ""
    for (let i of this.provinceC){
      if (i.value == str){
        code = i.code
        break;
      }
    }
    return code
  }
}
