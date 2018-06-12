import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  queryOptions: any;
  private productsCountSubject: Subject<number> = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/products`, { params: this.queryOptions })
      .pipe(map((response) => {
        this.productsCountSubject.next(response.data.total);
        return response.data.docs;
      }));
  }

  getMakes(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api_url}/products/makes`);
  }

  getTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api_url}/products/types`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/products/${id}`)
      .pipe(map((response) => response.data));
  }

  get productsAmount$(): Observable<number> {
    return this.productsCountSubject.asObservable();
  }
}
