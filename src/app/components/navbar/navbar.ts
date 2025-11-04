import { Component } from '@angular/core';
import { MyModal } from '../my-modal/my-modal';

@Component({
  selector: 'app-navbar',
  imports: [
    MyModal
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
