import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [CommonModule],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild'],
  outputs:['userEvent']
})
export class Child2Demo {
  aChild: any;
  b: number = 200;
  user = { name: 'Virat Kohli', add: 'India', age: 38 }

  userEvent = new EventEmitter();
  sendDataToParent() {
    this.userEvent.emit(this.user);
  }
}
