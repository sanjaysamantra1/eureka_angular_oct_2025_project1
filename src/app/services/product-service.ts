import { Injectable } from '@angular/core';
import products from './products_data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts(){
    return products;
  }
  getProductsByCategory(category:string){
    return products.filter(product => product.category === category);
  }
}
