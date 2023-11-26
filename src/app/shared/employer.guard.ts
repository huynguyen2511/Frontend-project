import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employerGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('Employer auth')
  const router = inject(Router)
  if(token){
    return true
  }else{
    router.navigateByUrl('employerlogin')
    return false
  }
};
