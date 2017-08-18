import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Skill } from 'app/model/skill';
import { Employee } from 'app/model/employee';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit, OnChanges {
  @Input() skill: Skill;
  @Input() employee: Employee;

  constructor() { }

  ngOnChanges() {
    
  }

  ngOnInit() {
  }

}
