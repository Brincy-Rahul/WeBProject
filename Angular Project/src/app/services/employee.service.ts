import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:2528'

  private employees = new Subject<any>();
  employees$ = this.employees.asObservable();

  private employee = new Subject<any>();
  employee$ = this.employee.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllEmployees() {
    const url = `${this.baseUrl}/api/Employee/`;
    this.crudService.Read(url).subscribe(
      data => {
        this.employees.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  getAllEmployeesbyId(id) {
    const url = `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.employee.next(data);
      }
    );
  }
  createEmployee(employee) {
    const url = `${this.baseUrl}/api/Employee`;
    this.crudService.Create(url, employee).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  deleteEmployee(id) {
    const url = `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  updateEmployee(id,employee)
  {
    const url=`${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Update(url, employee).subscribe(
      data => {
        this.employees.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
}
