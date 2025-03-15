import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const router = inject(Router)

  if (!loginService.isLoggedIn()) {
    router.navigate(['/login'])
    return false;
  }
  return true;
};
