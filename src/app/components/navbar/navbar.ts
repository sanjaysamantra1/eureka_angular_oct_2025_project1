import { UserInfoService } from './../../services/user-info-service';
import { Component, inject } from '@angular/core';
import { MyModal } from '../my-modal/my-modal';
import { Cart } from '../cart/cart';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MyModal,
    Cart,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userInfoService = inject(UserInfoService);
  userRole:string = '';
  
  ngOnInit(){
    this.userRole = this.userInfoService.userRole;
  }
}
