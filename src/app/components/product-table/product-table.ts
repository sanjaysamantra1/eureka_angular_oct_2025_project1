import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-table',
  imports: [],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  productArr: any;
  productService = inject(ProductService); // Dependency Injection
  constructor() { 
    this.productArr = this.productService.getAllProducts();
  }
}
