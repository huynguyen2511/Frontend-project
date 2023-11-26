import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

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

    this.adminService
      .adminLogin(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((res: any) => {
        if (res.err == 0) {
          this.router.navigateByUrl('/admin');
        } else {
          alert(res.mes);
        }
      });
  }
}
