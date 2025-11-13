import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {
  }
  getAllEmployees():Observable<Employee[]> {
    // return this.httpClient.get(this.comments_url);
    return this.httpClient.get<Employee[]>(this.url).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((empInfo: Employee) => {
          let { id, firstName, lastName, sal, gender } = empInfo;
          return new Employee(id, firstName, lastName, sal, gender);
        });
      })
    );
  }
}
