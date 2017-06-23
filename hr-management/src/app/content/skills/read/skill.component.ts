import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

//Model
import { Skill } from 'app/model/skill';

//Services
import { DatabaseService } from 'app/services/database.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill;
  editName: boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.databaseService.getSkill(params['id']))
        .subscribe(skill => this.skill = skill);
  }

  goBack(): void {
    this.location.back();
  }

  editSkill(): void {
    this.editName = true;
  }

  closeEditSkill(): void {
    this.editName = false;
  }

}
