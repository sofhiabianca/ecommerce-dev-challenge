export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: ProductCategory;
}

export enum ProductCategory {
  CLEANSER = 'cleanser',
  MOISTURIZER = 'moisturizer',
  EYE_CREAM = 'eye_cream',
  SET = 'set',
}

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public imageUrl: string,
    public description?: string,
    public category?: ProductCategory
  ) {}

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  isPartOfSet(): boolean {
    return this.category === ProductCategory.SET;
  }

  getDisplayName(): string {
    return this.name || 'Unnamed Product';
  }
}
