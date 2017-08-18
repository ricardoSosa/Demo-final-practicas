import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Skill } from 'app/model/skill';
import { Employee } from 'app/model/employee';
import { EmployeeSkills } from 'app/model/employee-skills';

@Component({
  selector: 'app-dev-level-list',
  templateUrl: './dev-level-list.component.html',
  styleUrls: ['./dev-level-list.component.css']
})
export class DevLevelListComponent implements OnInit {
  @Input() levelName: string;
  @Input() levelColor: string;
  @Input() skills: Skill[];
  headerColor: string;
  containerColor: string;

  constructor() { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.setColor();
  }

  private setColor() {
    switch(this.levelColor) {
      case 'colorJunior':
        this.headerColor = '#ebccd1';
        this.containerColor = '#f2dede';
        break;
      case 'colorIntermediate':
        this.headerColor = '#faebcc';
        this.containerColor = '#fcf8e3';
      break;
        case 'colorSenior':
        this.headerColor = '#d6e9c6';
        this.containerColor = '#dff0d8';
        break;
      case 'colorLead':
        this.headerColor = '#bce8f1';
        this.containerColor = '#d9edf7';
        break;
    }
  }

}
