import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from 'app/model/skill';
import { DatabaseService } from 'app/services/database.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css']
})
export class OptionsPanelComponent implements OnInit {
  skills: Skill[];
  skillsNames: string[];

  constructor(private databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.databaseService.getSkills().then(skills => this.skills = skills);
    this.databaseService.getSkills().then(skills => this.skillsNames = skills.map(function(a) {return a.name}));
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.skillsNames.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));

}
