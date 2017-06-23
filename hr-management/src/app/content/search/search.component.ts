import { Component, OnInit } from '@angular/core';

import { Employee } from 'app/model/employee';
import { Skill } from 'app/model/skill';
import { SkillEmployees } from 'app/model/skill-employees';

import { DatabaseService } from 'app/services/database.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const states = ['AngularJS', 'Angular2', 'Java', 'jQuery', 'Knockout Js', 'Python', '.Net', 'ASP.Net', 'JSP', 'Aplets'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  skills: Skill[];
  skillsNames: string[];
  skillEmployees: SkillEmployees;
  juniorOption: boolean = false;
  intermediateOption: boolean = false;
  seniorOption: boolean = false;
  leadOption: boolean = false;
  juniorFilter: string;
  intermediateFilter: string;
  seniorFilter: string;
  leadFilter: string;

  constructor(private databaseService: DatabaseService) { }

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

  changeFilterOption(option: string){
    switch(option){
      case 'junior':
        if(this.juniorOption){
          this.juniorOption = false;
        } else {
          this.juniorOption = true;
        }
        break;
      case 'intermediate':
        if(this.intermediateOption){
          this.intermediateOption = false;
        } else {
          this.intermediateOption = true;
        }
        break;
      case 'senior':
        if(this.seniorOption){
          this.seniorOption = false;
        } else {
          this.seniorOption = true;
        }
        break;
      case 'lead':
        if(this.leadOption){
          this.leadOption = false;
        } else {
          this.leadOption = true;
        }
        break;
      case 'all':
        if(this.juniorOption && this.intermediateOption &&
            this.seniorOption && this.leadOption){
          this.juniorOption = false;
          this.intermediateOption = false;
          this.seniorOption = false;
          this.leadOption = false;    
        } else {
          this.juniorOption = true;
          this.intermediateOption = true;
          this.seniorOption = true;
          this.leadOption = true; 
        }
        break;
    }
  }

  searchEmployees(skillName: string): void {
    let sk: Skill = this.skills.find(skill => skill.name == skillName);
    this.databaseService.getSkillEmployees(sk.id).then(employees => this.skillEmployees = employees);
    console.log(this.skillEmployees);
  }
}
