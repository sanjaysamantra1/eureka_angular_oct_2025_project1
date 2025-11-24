import { MyModal } from './../my-modal/my-modal';
import { Component, ViewEncapsulation } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { Products } from '../products/products';
import { UserList } from '../user-list/user-list';
import { Demo1 } from '../demo1/demo1';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { ProductTable } from '../product-table/product-table';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';

@Component({
  selector: 'app-body',
  imports: [
    // TopDeals,
    // Databinding,
    // Directives
    // Products,
    // ProductTable
    // MyModal
    // UserList
    // Demo1
    // EmployeeCrud
    // PipesDemo
    // ParentDemo
    // CommentList
    // EmployeeList
    // ObservableDemo1
    ObservableDemo2
    // ObservableDemo3
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
