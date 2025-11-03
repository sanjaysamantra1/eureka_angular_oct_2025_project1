import { Component, ViewEncapsulation } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { Products } from '../products/products';

@Component({
  selector: 'app-body',
  imports: [
    // TopDeals,
    // Databinding,
    Directives
    // Products
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
