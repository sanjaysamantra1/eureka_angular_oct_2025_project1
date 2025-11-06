import { Component } from '@angular/core';
import products from './products_data';
import { FormsModule } from '@angular/forms';
import { Textonly } from '../../custom_directives/textonly';
import { Zoomin } from '../../custom_directives/zoomin';

@Component({
  selector: 'app-products',
  imports: [
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

  constructor() {
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
}
