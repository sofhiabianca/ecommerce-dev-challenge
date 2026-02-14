import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { MarqueeContentComponent } from '../marquee-content/marquee-content';

@Component({
  selector: 'app-featured-products',
  imports: [CommonModule, ProductCardComponent, MarqueeContentComponent],
  templateUrl: './featured-products.html',
  styleUrls: ['./featured-products.scss'],
  standalone: true
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public isLoading = false;
  public hasError = false;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.hasError = false;

    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products = products;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.hasError = true;
          this.isLoading = false;
        },
      });
  }
}
