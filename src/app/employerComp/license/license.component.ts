import { Component } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent {
  
  file:any;
  getFile(event:any){
    this.file = event.target.files[0];
    console.log("files", this.file);
  }

  additionalFile:any;
  getAdditionalFile(event:any){
    this.additionalFile = event.target.files[0];
    console.log("Additional files", this.additionalFile);
  }

  
}
