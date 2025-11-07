import { Component } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-demo',
  imports: [
    CommonModule,
    Child1Demo,
    Child2Demo
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a: number = 100;

  user:any;
  receiveDataFromChild(userFromChild:any){
    this.user = userFromChild;
  }
}
