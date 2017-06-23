import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Employee } from 'app/model/employee';
import { Skill } from 'app/model/skill';
import { EmployeeSkills } from 'app/model/employee-skills';
import { SkillEmployees } from 'app/model/skill-employees';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatabaseService {
    //private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    
    getEmployees(): Promise<Employee[]> {
        //return Promise.resolve(EMPS);
        return this.http.get('http://localhost:54395/api/Employee/getList')
                .toPromise()
                .then(response => response.json().employees as Employee[])
                .catch(this.handleError);
    }

    getEmployee(id: string): Promise<Employee> {
        return this.http.get('http://localhost:54395/api/Employee/getEmployee?userId='+id)
                .toPromise()
                .then(response => response.json() as Employee)
                .catch(this.handleError);
    }

    //getEmployeeSkills(id: string): Promise<EmployeeSkills> {
    //    return Promise.resolve(SKILLS);
    //}

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

    getSkillEmployees(id: string): Promise<SkillEmployees> {
        return this.http.get('http://localhost:54395/api/Skill/getEmployees?id='+id)
                .toPromise()
                .then(response => response.json() as SkillEmployees)
                .catch(this.handleError);
    }

    /*assignSkill(employeeName: string, skillName: string, skillLevel: string): Promise<string> {
       return this.http
                .post('http://localhost:54395/api/Employee/assignSkill', JSON.stringify({
                    employeeName: employeeName, 
                    skillName: skillName, 
                    skillLevel: skillLevel}), {headers: this.headers})
                .toPromise()
                .then(res => res.json() as string)
                .catch(this.handleError);
    }*/
}