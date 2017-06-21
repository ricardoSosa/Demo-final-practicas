import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Employee } from 'app/model/employee';
import { EmployeeSkills } from 'app/model/employee-skills';
import { EmployeeService } from 'app/services/employee.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  employee: Employee;
  employeeSkills: EmployeeSkills;
  editName: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
        .subscribe(employee => this.employee = employee);
    this.route.params
        .switchMap((params: Params) => this.employeeService.getEmployeeSkills(+params['id']))
        .subscribe(empSkills => this.employeeSkills = empSkills);
  }

  goBack(): void {
    this.location.back();
  }

  editUser(): void {
    this.editName = true;
  }

  closeEditUser(): void {
    this.editName = false;
  }
}
