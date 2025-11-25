import { Component } from '@angular/core';
import { MyModal } from '../my-modal/my-modal';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-navbar',
  imports: [
    MyModal,
    Cart
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
