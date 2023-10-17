import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(){}

  public ngOnInit(): void {
    // this.isLoggedIn$ = this.employerAuthService.isLoggedIn();
    // this.isLoggedOut$ = this.employerAuthService.isLoggedOut();
  }
  
  public logout(){
    // this.employerAuthService.logout()
  }
}
