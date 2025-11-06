import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom_pipes/ordinal-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName: string = 'saChin tEnDULkAr';
  salary: number = 5000;
  dateObj = new Date();

  user = { name: 'sanjay', add: 'bangalore', age: 55 };
  numArr = [10, 20, 30, 40, 50, 60, 70];
  num: number = 21;
}
