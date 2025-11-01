import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
  // styles: ['h3 { color:purple; }']
})
export class Databinding {
  myName: string = 'Virat Kohli';
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGTcQI9_LYx7i1ZBeoE4SV1ZOwV9I-gRZfw&s'
  flag: boolean = true;
  col_span_value = 2;

  num1: number = 10;
  num2: number = 20;

  addResult: any;
  addition(a: string, b: string) {
    // this.addResult = +a + +b;
    this.addResult = Number(a) + Number(b);
    // this.addResult = parseInt(a) + parseInt(b);
  }

  toggleFlag() {
    this.flag = !this.flag;
  }
}
