import { Employee } from 'app/model/employee';

export class SkillEmployees {
    id: string;
    name: string;
    JrEmployees: Employee[];
    IntEmployees: Employee[];
    SrEmployees: Employee[];
    LdEmployees: Employee[];
}