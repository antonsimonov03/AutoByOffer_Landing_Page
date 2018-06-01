import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable()
export class ProductService {

  mockedProducts: Product[] = [
    {
      id: 1,
      titleImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
      images: [
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg'
      ],
      make: 'KMM',
      model: 'Yamaha Olala',
      year: 2007,
      color: 'White',
      odometer: 16700,
      price: 12345,
      condition: 'New',
      category: 'Motorcycle',
      type: 'tourist',
      mileage: 118,
      family: 'Adventure',
      engine: 'OMG so cool, so wow'
    },
    {
      id: 1,
      titleImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
      images: [
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg'
      ],
      make: 'KMM',
      model: 'Yamaha Olala',
      year: 2007,
      color: 'White',
      odometer: 16700,
      price: 12345,
      condition: 'New',
      category: 'Motorcycle',
      type: 'tourist',
      mileage: 118,
      family: 'Adventure',
      engine: 'OMG so cool, so wow'
    },
    {
      id: 1,
      titleImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
      images: [
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg'
      ],
      make: 'KMM',
      model: 'Yamaha Olala',
      year: 2007,
      color: 'White',
      odometer: 16700,
      price: 12345,
      condition: 'New',
      category: 'Motorcycle',
      type: 'tourist',
      mileage: 118,
      family: 'Adventure',
      engine: 'OMG so cool, so wow'
    },
    {
      id: 1,
      titleImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
      images: [
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg'
      ],
      make: 'KMM',
      model: 'Yamaha Olala',
      year: 2007,
      color: 'White',
      odometer: 16700,
      price: 12345,
      condition: 'New',
      category: 'Motorcycle',
      type: 'tourist',
      mileage: 118,
      family: 'Adventure',
      engine: 'OMG so cool, so wow'
    },
    {
      id: 1,
      titleImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
      images: [
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg',
        'https://www.w3schools.com/w3css/img_lights.jpg'
      ],
      make: 'KMM',
      model: 'Yamaha Olala',
      year: 2007,
      color: 'White',
      odometer: 16700,
      price: 12345,
      condition: 'New',
      category: 'Motorcycle',
      type: 'tourist',
      mileage: 118,
      family: 'Adventure',
      engine: 'OMG so cool, so wow'
    }
  ];

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>('url');
    return of<Product[]>(this.mockedProducts);
  }

  getProduct(id: number): Observable<Product> {
    // return this.http.get<Product>(`url/${id}`);
    return of<Product>(this.mockedProducts[id]);
  }
}
