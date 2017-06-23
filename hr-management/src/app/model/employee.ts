import { Skill } from 'app/model/skill';

export class Employee {
    id: string;
    name: string;
    JrSkills: Skill[];
    IntSkills: Skill[];
    SrSkills: Skill[];
    LdSkills: Skill[];
}