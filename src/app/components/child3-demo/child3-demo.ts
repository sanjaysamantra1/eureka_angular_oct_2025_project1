import { Component } from '@angular/core';

@Component({
  selector: 'app-child3-demo',
  imports: [],
  templateUrl: './child3-demo.html',
  styleUrl: './child3-demo.css',
})
export class Child3Demo {
  intervalId: number;
  constructor() {
    console.log('Child-3 Constructor');
    this.intervalId = setInterval(() => {
      console.log('Hiiiiiiii')
    }, 2000);
  }
  ngOnInit() {
    console.log('Child-3 ngOnInit')
  }
  ngOnDestroy() {
    console.log('Child-3 ngOnDestroy')
    clearInterval(this.intervalId);
  }
}
