import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-candidate-cv',
  templateUrl: './candidate-cv.component.html',
  styleUrls: ['./candidate-cv.component.scss'],
})
export class CandidateCvComponent implements OnInit {
  appliedCvId;
  appliedList;
  cv;

  constructor(
    private activatedRoute: ActivatedRoute,
    private empService: EmployerService
  ) {}
  ngOnInit(): void {
    this.appliedCvId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.empService.getAppliedCvs().subscribe((res: any) => {
      this.appliedList = res.response;
      console.log(this.appliedList);
      this.cv = this.appliedList.find((x) => x.id == this.appliedCvId);
      console.log(this.cv);
    });
  }

  
}
