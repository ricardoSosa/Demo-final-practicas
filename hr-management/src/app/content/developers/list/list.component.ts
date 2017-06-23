import { Component, OnInit } from '@angular/core';

import { Employee } from 'app/model/employee';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];
  filter: string;

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
      this.databaseService.getEmployees().then(employees => this.employees = employees);
  }
}
