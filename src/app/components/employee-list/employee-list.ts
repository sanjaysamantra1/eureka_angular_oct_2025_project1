import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employeeArr: Employee[] = [];

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      console.log(response)
      this.employeeArr = response;
    })
  }
}
