import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    const now = Math.floor(Date.now() / 1000);

    if (exp && now >= exp) {
      localStorage.clear();
      router.navigate(['/login']);
      return false;
    }
  } catch (err) {
    console.error('Token inválido');
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }

  return true;
};
