import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent {

  uploadForm: FormGroup; 
  file: File = null;

  constructor( private formBuilder: FormBuilder, private userService:UserService, private router:Router){
  }
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  getFile(event:any){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
      this.uploadForm.get('profile').setValue(this.file);
    }
  }

  uploadCv(){
    if (!this.file) {
      alert('There is no file to upload!!!')
      return;
    }
    this.userService.uploadCv(this.uploadForm.get('profile').value).subscribe(res => {
      console.log(res);
      if(res.err == 0){
        alert("Uploaded Cv successful");
        this.router.navigateByUrl('/update-demand-job');
      }else{
        alert(res.mes)
        return
      }
    })
  }
}
