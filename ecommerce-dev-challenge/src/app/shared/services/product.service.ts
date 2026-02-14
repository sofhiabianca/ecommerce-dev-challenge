import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Product, IProduct, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsSubject = new BehaviorSubject<Product[]>([]);
  public readonly products$ = this.productsSubject.asObservable();

  private readonly mockProducts: IProduct[] = [
    { 
      id: 1, 
      name: 'Bamboo Charcoal Cleanser', 
      price: 29.99, 
      imageUrl: '/images/products/cleanser.png',
      description: 'Deep cleansing face scrub',
      category: ProductCategory.CLEANSER
    },
    { 
      id: 2, 
      name: 'All Day Face Moisturizer', 
      price: 34.99, 
      imageUrl: '/images/products/moisturizer.png',
      description: 'Lightweight daily moisturizer',
      category: ProductCategory.MOISTURIZER
    },
    { 
      id: 3, 
      name: 'Daily Eye Cream', 
      price: 24.99, 
      imageUrl: '/images/products/stick.png',
      description: 'Refreshing eye cream stick',
      category: ProductCategory.EYE_CREAM
    },
    { 
      id: 4, 
      name: 'Complete Skincare Set', 
      price: 58.99, 
      imageUrl: '/images/products/set.png',
      description: 'All three products in one set',
      category: ProductCategory.SET
    },
  ];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    const products = this.mockProducts.map(p => 
      new Product(p.id, p.name, p.price, p.imageUrl, p.description, p.category)
    );
    this.productsSubject.next(products);
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.products$.pipe(
      map(products => products.find(p => p.id === id))
    );
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.filter(p => p.category === category))
    );
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    const term = searchTerm.toLowerCase().trim();
    return this.products$.pipe(
      map(products => 
        products.filter(p => p.name.toLowerCase().includes(term))
      )
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.products$.pipe(
      delay(300),
      map(products => products.slice(0, 3))
    );
  }
}
