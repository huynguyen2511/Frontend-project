import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-find-cv',
  templateUrl: './find-cv.component.html',
  styleUrls: ['./find-cv.component.scss'],
})
export class FindCvComponent implements OnInit {
  constructor(private empService: EmployerService) {}
  ngOnInit(): void {}
  findForm: FormGroup = new FormGroup({
    companyName: new FormControl(''),
  });
  findCompany() {
    console.log(this.findForm.get('companyName').value);  
  }
}
