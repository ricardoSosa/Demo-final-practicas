import { Component, OnInit } from '@angular/core';

import { Employee } from 'app/model/employee';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
      this.employeeService.getEmployees().then(employees => this.employees = employees);
  }
}
