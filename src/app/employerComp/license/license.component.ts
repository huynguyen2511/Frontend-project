import { Component, OnInit, Input } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit{
  licenseArr: any
  status:any

  uploadForm: FormGroup; 
  file: File = null;

  // additionalFile: File = null;
  constructor(private employerService: EmployerService, private formBuilder: FormBuilder){
    this.employerService.getLicense().subscribe(data => { 
      this.licenseArr = data.response
      this.status = this.licenseArr.statusCode
    })
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  getFile(event:any){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log("files", this.file);
      this.uploadForm.get('profile').setValue(this.file);
    }
  }

  upload(){
    console.log(this.uploadForm.get('profile').value);
    this.employerService.uploadLicense(this.uploadForm.get('profile').value).subscribe(res => {
      console.log(res);
      alert("Uploaded")
    })
  }

}
