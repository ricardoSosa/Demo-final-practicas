import { Injectable } from '@angular/core';

import { Employee } from 'app/model/employee';
import { EmployeeSkills } from 'app/model/employee-skills';
import { SKILLS } from 'app/services/mock-employee-skills';
import { EMPS } from 'app/services/mock-employees';

@Injectable()
export class EmployeeService {
    getEmployees(): Promise<Employee[]> {
        return Promise.resolve(EMPS);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
                    .then(emps => emps.find(emp => emp.id === id));
    }

    getEmployeeSkills(id: number): Promise<EmployeeSkills> {
        return Promise.resolve(SKILLS);
    }
}