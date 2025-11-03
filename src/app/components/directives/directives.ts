
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  // cars = ['Tata', 'Honda', 'Toyota', 'Hyundai']
  cars = [];
  flag: boolean = true;

  myMap = new Map().set(101, 'Bharath').set(102, 'Sai kiran').set(103, 'Hanish');

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];


  myStyle1 = {
    color: 'red',
    padding: '10px',
    border: '5px dotted green'
  }
  myStyle2 = {
    color: 'green',
    padding: '10px',
    border: '5px dotted yellow'
  }

  myFunction() {
    return this.flag ? this.myStyle1 : this.myStyle2;
  }



  taskArr = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];
  selectedTaskState: string = 'all';
  filterTaskArray() {
    if (this.selectedTaskState == 'all') {
      return this.taskArr;
    } else if (this.selectedTaskState === 'completed') {
      return this.taskArr.filter(task => task.completed)
    } else {
      return this.taskArr.filter(task => !task.completed)
    }
  }


  cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];
  increaseQty(cart: any) {
    cart.qty++;
  }
  decreaseQty(cart: any) {
    if (cart.qty > 1) {
      cart.qty--;
    }
  }

  //getter function 
  get totalCartValue() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  }

}
