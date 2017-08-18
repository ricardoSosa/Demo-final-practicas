import { Component, OnInit } from '@angular/core';

import { Employee } from 'app/model/employee';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {
  employees: Employee[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
      this.databaseService.getEmployees().then(employees => this.employees = employees);
  }

}
