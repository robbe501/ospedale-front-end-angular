import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoggedUserDataService } from './services/logged-user-data.service';

export function isAuth(role: string): CanActivateFn {
  return () => {
    const lud = inject(LoggedUserDataService)
    const router = inject(Router);
    if(lud.hasRole(role)) {
      return true;
    }
    router.navigate(['login']);
    return false;
  }
};
