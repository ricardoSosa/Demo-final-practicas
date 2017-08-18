import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'app/model/employee';
import { Skill } from 'app/model/skill';
import { SkillEmployees } from 'app/model/skill-employees';

import { DatabaseService } from 'app/services/database.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  skills: Skill[];
  employees: Employee[];
  employeesNames: string[];
  skillsNames: string[];
  skillEmployees: SkillEmployees;

  constructor(private databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.databaseService.getSkills().then(skills => this.skills = skills);
    this.databaseService.getSkills().then(skills => this.skillsNames = skills.map(function(a) {return a.name}));
  }

  public model: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.skillsNames.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));

  searchEmployees(skillName: string): void {
    let sk: Skill = this.skills.find(skill => skill.name == skillName);
    this.databaseService.getSkillEmployees(sk.id).then(employees => this.skillEmployees = employees);
    console.log(this.skillEmployees);
  }

  seeSkillInformation(skillName: string): void {
    let sk: Skill = this.skills.find(skill => skill.name == skillName);
    let skId: string = sk.id;
    this.router.navigate(['skills/'+skId]);
  }

}
