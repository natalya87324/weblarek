import { IProduct } from '../../types/index.ts';

export class Cart {
  private items: IProduct[];

  constructor() {
    this.items = [];
  }

  getItems(): IProduct[] {
    return [...this.items];
  }

  addItem(product: IProduct): void {
    const isAdded = this.hasItem(product.id);
    if (!isAdded) {
      this.items.push(product);
    }
    
  }

  removeItem(product: IProduct): void {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  clear(): void {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, current) =>  acc + (current.price ?? 0), 
    0);
  }

  getItemCount(): number {
    return this.items.length;
  }

  hasItem(id: string): boolean {
    return this.items.some(item => item.id === id);
  }
}
