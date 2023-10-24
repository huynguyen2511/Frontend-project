import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { EmployerAuthService } from 'src/app/services/employer-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  isExpanded = false;

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();

  constructor(private adminService: AdminService) {}

  public ngOnInit(): void {
    this.isLoggedIn$ = this.adminService.isLoggedIn();
    this.isLoggedOut$ = this.adminService.isLoggedOut();
  }
  
  public logout(){
    this.adminService.logout()
  }
}
