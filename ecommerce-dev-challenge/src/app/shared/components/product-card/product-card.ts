import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() productClick = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  public onProductClick(): void {
    this.productClick.emit(this.product);
  }
  public onAddToCartClick(event: Event): void {
    event.stopPropagation();
    this.addToCart.emit(this.product);
  }
  public get formattedPrice(): string {
    return this.product.getFormattedPrice();
  }
}
