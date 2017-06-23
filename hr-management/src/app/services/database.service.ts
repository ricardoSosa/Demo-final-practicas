import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from 'app/model/employee';
import { Skill } from 'app/model/skill';
import { EmployeeSkills } from 'app/model/employee-skills';
import { SkillEmployees } from 'app/model/skill-employees';

import { SKILLS } from 'app/services/mock-employee-skills';
import { EMPS } from 'app/services/mock-employees';
import { SK } from 'app/services/mock-skills';
import { SKEMP } from 'app/services/mock-skill-employees';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatabaseService {
    constructor(private http: Http) { }
    
    getEmployees(): Promise<Employee[]> {
        return Promise.resolve(EMPS);
    }

    getEmployee(id: string): Promise<Employee> {
        return this.getEmployees()
                    .then(emps => emps.find(emp => emp.id === id));
    }

    getEmployeeSkills(id: string): Promise<EmployeeSkills> {
        return Promise.resolve(SKILLS);
    }

    getSkills(): Promise<Skill[]> {
        return this.http.get('http://localhost:54395/api/Skill/getList')
                .toPromise()
                .then(response => response.json().skillList as Skill[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getSkill(id: string): Promise<Skill> {
        return this.http.get('http://localhost:54395/api/Skill/getSkill?id='+id)
                .toPromise()
                .then(response => response.json() as Skill)
                .catch(this.handleError);
    }

    getSkillEmployees(): Promise<SkillEmployees> {
        return Promise.resolve(SKEMP);
    }
}