import { Component } from '@angular/core';
import products from './products_data';
import { FormsModule } from '@angular/forms';
import { Textonly } from '../../custom_directives/textonly';
import { Zoomin } from '../../custom_directives/zoomin';
import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink,
    FormsModule,
    Textonly,
    Zoomin
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  filteredProducts = products;
  categoryArr: string[] = [];
  selectedCategory: string = 'all';

  constructor(private cartService: CartService) {
    this.categoryArr = products.map(prod => prod.category); // duplicate categories
    this.categoryArr = ['all', ...new Set(this.categoryArr)]; // unique categories
  }
  onCategoryChange() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = products;
    } else {
      this.filteredProducts = products.filter(product => product.category === this.selectedCategory);
    }
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
