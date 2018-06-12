import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { environment } from '@env/environment';

import { User } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;

  private authSubject: Subject<boolean>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.authSubject = new Subject<boolean>();
  }

  signup(userData: User): void {
    this.http.post(`${environment.api_url}/signup`, userData)
      .subscribe( (response: any) => {
        localStorage.setItem('token', response.token);
        this.authSubject.next(true);
        this.getCurrentUser();
        this.router.navigateByUrl('/complete-profile');
      });
  }

  login(userData: User): void {
    this.http.post(`${environment.api_url}/login`, userData)
      .subscribe( (response: any) => {
        localStorage.setItem('token', response.token);
        this.authSubject.next(true);
        this.getCurrentUser();
        this.router.navigateByUrl('/home');
      });
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('token');
    this.authSubject.next(false);
    this.router.navigateByUrl('/login');
  }

  getCurrentUser(): void {
    if (!this.user) {
      this.http.get(`${environment.api_url}/me`)
        .subscribe( (user: User) => {
          this.user = user;
        });
    }
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get authChanged$(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  get isLoggedIn(): boolean {
    return Boolean(this.token);
  }

}

