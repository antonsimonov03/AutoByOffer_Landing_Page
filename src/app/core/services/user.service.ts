import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { User } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api_url}/user`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.api_url}/user/${id}`);
  }

  updateUser(id: string, userData: User): Observable<User> {
    return this.http.put<User>(`${environment.api_url}/user/${id}`, userData);
  }
}
