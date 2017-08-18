import { Component, OnInit } from '@angular/core';

import { Skill } from 'app/model/skill';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent implements OnInit {
  skills: Skill[];
  filter: string;

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
      this.databaseService.getSkills().then(skills => this.skills = skills);
  }

}
