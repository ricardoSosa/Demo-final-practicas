import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { SkillLevelListComponent } from '../../table-level-lists/skill-level-list/skill-level-list.component';
import { TableLevelListsComponent } from '../../table-level-lists/table-level-lists.component';
import { SelectionListComponent } from '../../selection-list/selection-list.component';
import { InformationPanelComponent } from '../../information-panel/information-panel.component';

//Model
import { Skill } from 'app/model/skill';
import { Employee } from 'app/model/employee';
import { SkillEmployees } from 'app/model/skill-employees';

//Services
import { DatabaseService } from 'app/services/database.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [ TableLevelListsComponent ]
})
export class SkillComponent implements OnInit {
  skill: Skill;
  skillEmployees: SkillEmployees;
  editName: boolean = false;
  addFamilyOption: boolean = false;
  removeFamilyOption: boolean = false;
  element: string = "skill";

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private location: Location,
    private tableLevelListsComponent: TableLevelListsComponent
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.databaseService.getSkill(params['id']))
        .subscribe(skill => this.skill = skill);
    this.route.params
        .switchMap((params: Params) => this.databaseService.getSkillEmployees(params['id']))
        .subscribe(skillEmployees => this.skillEmployees = skillEmployees);
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

  activateAddFamilyOption(): void {
    this.removeFamilyOption = false;
    if(this.addFamilyOption){
      this.addFamilyOption = false;
    } else {
      this.addFamilyOption = true;
    }
  }

  activateRemoveFamilyOption(option: number): void {
    this.addFamilyOption = false;
    if(this.removeFamilyOption){
      this.removeFamilyOption = false;
    } else {
      this.removeFamilyOption = true;
    }
  }

}
