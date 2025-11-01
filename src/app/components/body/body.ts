import { Component, ViewEncapsulation } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';

@Component({
  selector: 'app-body',
  imports: [
    // TopDeals,
    // Databinding,
    Directives
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
