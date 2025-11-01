import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  cars = ['Tata', 'Honda', 'Toyota', 'Hyundai']
}
