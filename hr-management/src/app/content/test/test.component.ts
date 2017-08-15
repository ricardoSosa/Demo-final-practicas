import { Component, OnInit } from '@angular/core';

import { SkillLevelListComponent } from '../table-level-lists/skill-level-list/skill-level-list.component';
import { TableLevelListsComponent } from '../table-level-lists/table-level-lists.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ SkillLevelListComponent ]
})
export class TestComponent implements OnInit {
  levelName: string = 'Int';

  constructor(private skillLevelListComponent: SkillLevelListComponent) {}

  ngOnInit() {
  }

}
