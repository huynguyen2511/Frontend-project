import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    { updateOn: 'submit' }
  );

  ngOnInit(): void {}

  onCreate() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .authLogin(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((res: any) => {
        if (res.err == 0) {
          this.router.navigateByUrl('/');
        } else {
          alert(res.mes);
        }
      });
  }
}
