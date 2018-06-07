import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable()
export class ProductService {

  queryOptions: any;

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/products`, { params: this.queryOptions })
      .pipe(map((response) => response.data.docs));
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/products/${id}`)
      .pipe(map((response) => response.data));
  }
}
