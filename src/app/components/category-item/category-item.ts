import { Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css',
  inputs: ['category']
})
export class CategoryItem {
  category: any;
}
