import { Component, OnInit } from '@angular/core';

import { Skill } from 'app/model/skill';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
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
