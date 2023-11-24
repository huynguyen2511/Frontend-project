import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss']
})
export class JobPostsComponent  implements OnInit{
  jobLists : any
  constructor(private employerService:EmployerService, private confirmationDialogService: ConfirmationDialogService){}

  ngOnInit(): void {
    this.employerService.getPostById().subscribe(data =>{
      let arr = Object.values(data)
      this.jobLists = arr[2]
      console.log(this.jobLists);
      
    })
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm to delete', 'Do you really want to delete this post ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
