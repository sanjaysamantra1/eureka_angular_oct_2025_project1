import { MyModal } from './../my-modal/my-modal';
import { Component, ViewEncapsulation } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { Products } from '../products/products';
import { UserList } from '../user-list/user-list';
import { Demo1 } from '../demo1/demo1';

@Component({
  selector: 'app-body',
  imports: [
    // TopDeals,
    // Databinding,
    // Directives
    Products
    // MyModal
    // UserList
    // Demo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
