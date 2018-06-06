import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '@env/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {

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
        this.router.navigateByUrl('/complete-profile');
      });
  }

  login(userData: User): void {
    this.http.post(`${environment.api_url}/login`, userData)
      .subscribe( (response: any) => {
        localStorage.setItem('token', response.token);
        this.authSubject.next(true);
        this.router.navigateByUrl('/home');
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authSubject.next(false);
    this.router.navigateByUrl('/login');
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get auth$(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  get isLoggedIn(): boolean {
    return Boolean(this.token);
  }

}

