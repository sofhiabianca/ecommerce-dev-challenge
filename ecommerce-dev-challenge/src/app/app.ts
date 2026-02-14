import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header';
import { FooterComponent } from './core/footer/footer';
import { HeroComponent } from './features/hero/hero';
import { FeaturedProductsComponent } from './features/featured-products/featured-products';
import { ProductSet } from './features/product-set/product-set';
import { IngredientsList } from './features/ingredients-list/ingredients-list';
import { Formulas } from './features/formulas/formulas';
import { Testimonials } from './features/testimonials/testimonials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, FooterComponent, HeroComponent, FeaturedProductsComponent, ProductSet, IngredientsList, Formulas, Testimonials],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true
})
export class AppComponent {
  title = 'ecommerce-dev-challenge';
}
