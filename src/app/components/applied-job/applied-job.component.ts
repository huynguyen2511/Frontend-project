import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.scss'],
})
export class AppliedJobComponent implements OnInit {
  appliedList: any;
  list: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAppliedPosts().subscribe((res: any) => {
      this.appliedList = res.response;
      if (
        typeof this.appliedList != 'undefined' &&
        this.appliedList != null &&
        this.appliedList.length != null &&
        this.appliedList.length > 0
      ) {
        this.list = 1;
        console.log(this.list);
      } else {
        this.list = 0;
        console.log(this.list);
      }
    });
  }
}
