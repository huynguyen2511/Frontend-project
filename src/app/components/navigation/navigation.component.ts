import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();

  constructor(public authService: AuthService){}

  public ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.isLoggedOut$ = this.authService.isLoggedOut();
  }
  
  public logout(){
    this.authService.logout()
  }
}
