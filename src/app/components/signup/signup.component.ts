import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  regisForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  },{ updateOn: 'submit' });

  ngOnInit(): void {}

  onCreate() {
    if (this.regisForm.invalid) {
      return;
    } else{
      this.authService.authRegis(this.regisForm.value).subscribe((data) => {
        console.log(data);
        if (data.err == 0) {
          alert('Register successfully');
          this.router.navigateByUrl('/');
        } else {
          alert(data.mes);
        }
      });
    }
  }
}
