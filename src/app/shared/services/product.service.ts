import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductService {

  serverUrl = 'http://localhost:3000/api/products';

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.serverUrl)
      .pipe(map((response) => response.data.docs));
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
}
