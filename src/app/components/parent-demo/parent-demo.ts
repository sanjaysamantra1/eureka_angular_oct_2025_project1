import { Component, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child3Demo } from '../child3-demo/child3-demo';
import { Child4Demo } from '../child4-demo/child4-demo';

@Component({
  selector: 'app-parent-demo',
  imports: [
    FormsModule,
    CommonModule,
    Child1Demo,
    Child2Demo,
    Child3Demo,
    Child4Demo
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a: number;
  user: any;
  flag:boolean = true;

  @ViewChild('myBox1') myInputBox1: any;

  receiveDataFromChild(userFromChild: any) {
    this.user = userFromChild;
  }

  constructor() {
    console.log("Parent constructor");
    console.log(this.myInputBox1);
    this.a = 100;
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() { // it wont be called as it doesn't have inputs:[]
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox1);
    this.myInputBox1.nativeElement.focus();
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }
}
