import { Component, OnInit } from '@angular/core';

import { SkillLevelListComponent } from './skill-level-list/skill-level-list.component';

@Component({
  selector: 'app-table-level-lists',
  templateUrl: './table-level-lists.component.html',
  styleUrls: ['./table-level-lists.component.css']
})
export class TableLevelListsComponent implements OnInit {
  strJunior: string = 'Junior';
  strIntermediate: string = 'Int.';
  strSenior: string = 'Senior';
  strLead: string = 'Lead';
  colorJunior: string = 'colorJunior';
  colorIntermediate: string = 'colorIntermediate';
  colorSenior: string = 'colorSenior';
  colorLead: string = 'colorLead';

  constructor() { }

  ngOnInit() {
  }

}
