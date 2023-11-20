import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent {
  uploadForm: FormGroup; 
  file: File = null;

  getFile(event:any){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log("files", this.file);
      this.uploadForm.get('profile').setValue(this.file);
    }
  }
}
