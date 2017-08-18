import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Skill } from 'app/model/skill';
import { Employee } from 'app/model/employee';
import { SkillEmployees } from 'app/model/skill-employees';

import { SkillLevelListComponent } from './skill-level-list/skill-level-list.component';
import { DevLevelListComponent } from './dev-level-list/dev-level-list.component';

@Component({
  selector: 'app-table-level-lists',
  templateUrl: './table-level-lists.component.html',
  styleUrls: ['./table-level-lists.component.css']
})
export class TableLevelListsComponent implements OnInit, OnChanges {
  strJunior: string = 'Junior';
  strIntermediate: string = 'Int.';
  strSenior: string = 'Senior';
  strLead: string = 'Lead';
  colorJunior: string = 'colorJunior';
  colorIntermediate: string = 'colorIntermediate';
  colorSenior: string = 'colorSenior';
  colorLead: string = 'colorLead';
  @Input() element:string;
  @Input() skillEmployees: SkillEmployees;
  @Input() employee: Employee[];

  constructor() {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

}
