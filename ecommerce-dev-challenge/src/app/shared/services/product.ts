import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 200, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 300, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 400, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 500, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 600, imageUrl: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
