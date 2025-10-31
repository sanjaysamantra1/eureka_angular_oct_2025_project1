import { Component } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';

@Component({
  selector: 'app-body',
  imports: [
    TopDeals,
    Databinding
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
