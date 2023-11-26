import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();

  user: any;

  constructor(
    public authService: AuthService,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.isLoggedOut$ = this.authService.isLoggedOut();
  }

  public ngOnInit(): void {
    this.authService.GetUser().subscribe((data) => {
      if (data) {
        let arr = Object.values(data);
        this.user = arr[2];
      } else {
        window.location.reload();
      }
      this.isLoggedIn$ = this.authService.isLoggedIn();
      this.isLoggedOut$ = this.authService.isLoggedOut();
    });
  }

  public logout() {
    this.authService.logout();
  }
}
