import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) { }

  logout () {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

}

