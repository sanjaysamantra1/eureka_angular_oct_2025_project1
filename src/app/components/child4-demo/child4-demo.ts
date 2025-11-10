import { Component } from '@angular/core';

@Component({
  selector: 'app-child4-demo',
  imports: [],
  templateUrl: './child4-demo.html',
  styleUrl: './child4-demo.css',
})
export class Child4Demo {
  constructor() {
    console.log('Child-4 Constructor')
  }
  ngOnInit() {
    console.log('Child-4 ngOnInit')
  }
  ngOnDestroy() {
    console.log('Child-4 ngOnDestroy')
  }
}
