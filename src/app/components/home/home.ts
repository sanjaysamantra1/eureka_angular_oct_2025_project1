import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { LargeComponent } from '../large-component/large-component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  largeComponent: any;
  
  constructor() {
    import('../large-component/large-component').then(m => {
      this.largeComponent = m.LargeComponent;
    });
  }
}
