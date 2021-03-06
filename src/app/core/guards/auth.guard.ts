import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '@core/services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService
  ) {}

  canActivate(): boolean {

    if (this.auth.isLoggedIn) {

      return true;
    } else {

      this.auth.logout();
      return false;
    }

  }
}
