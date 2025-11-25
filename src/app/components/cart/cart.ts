import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartsArr: any = [];

  constructor(private cartService: CartService) {
  }
  ngOnInit() {
    this.cartService.cartItem$.subscribe(newCartItem => {
      this.cartsArr = [...newCartItem];
    })
  }
}
