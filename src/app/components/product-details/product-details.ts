import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  activatedRoute = inject(ActivatedRoute);
  productInfo: any;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.productInfo = params;
    })
  }
}
