import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployerAuthService } from 'src/app/services/employer-auth.service';

@Component({
  selector: 'app-employer-nav',
  templateUrl: './employer-nav.component.html',
  styleUrls: ['./employer-nav.component.scss'],
})
export class EmployerNavComponent implements OnInit {
  isExpanded = true;

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();

  constructor(public employerAuthService: EmployerAuthService) {
    this.isLoggedIn$ = this.employerAuthService.isLoggedIn();
    this.isLoggedOut$ = this.employerAuthService.isLoggedOut();
  }

  public ngOnInit(): void {
    this.employerAuthService.CheckToken().subscribe((data) => {
      if (data) {
        let arr = Object.values(data);
      } else {
        window.location.reload();
      }
      this.isLoggedIn$ = this.employerAuthService.isLoggedIn();
      this.isLoggedOut$ = this.employerAuthService.isLoggedOut();
    });
  }

  public logout() {
    this.employerAuthService.logout();
  }
}
