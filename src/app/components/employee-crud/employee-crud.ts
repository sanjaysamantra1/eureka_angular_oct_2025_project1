import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-crud',
  imports: [
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  faEye = faEye;
  faTrash = faTrash;
  employeeArr = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  selectedEmployee: any = {};
  newEmp: any = { "eId": null, "name": "", "sal": null, "gender": "" }

  deleteEmployee(eId: number) {
    const isConfirmed = confirm('Are Your Sure to delete this record??')
    if (isConfirmed) {
      this.employeeArr = this.employeeArr.filter(emp => emp.eId !== eId)
    }
  }
  viewEmployee(currentEmployee: any) {
    this.selectedEmployee = currentEmployee;
  }
  addEmployee() {
    this.employeeArr.push(this.newEmp);
    this.newEmp = { "eId": null, "name": "", "sal": null, "gender": "" };
  }
}
