import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { takeWhile } from 'rxjs/operators';

import { AuthService } from '@core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  alive = true;
  isAuthenticated = this.auth.isLoggedIn;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.authChanged$
      .pipe(
        takeWhile( () => this.alive )
      )
      .subscribe( (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  logout(): void {
    this.auth.logout();
  }

}
