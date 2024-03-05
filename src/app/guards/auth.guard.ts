import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

function getCookie(name: string) {
  let ca: Array<string> = document.cookie.split(';');
  let caLen: number = ca.length;
  let cookieName = `${name}=`;
  let c: string;

  for (let i: number = 0; i < caLen; i += 1) {
    c = ca[i].replace(/^\s+/g, '');
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return null;
}

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);

  return !!getCookie('token') ? true : router.parseUrl('/autenticacao/entrar');
};
