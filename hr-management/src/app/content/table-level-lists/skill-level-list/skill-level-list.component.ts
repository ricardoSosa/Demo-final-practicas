import { Component, OnInit, Input } from '@angular/core';

const states = ['AngularJS', 'Angular2', 'Java', 'jQuery', 'Knockout Js', 'Python', '.Net', 'ASP.Net', 'JSP', 'Aplets'];

@Component({
  selector: 'app-skill-level-list',
  templateUrl: './skill-level-list.component.html',
  styleUrls: ['./skill-level-list.component.css']
})
export class SkillLevelListComponent implements OnInit {
  @Input() levelName: string;
  @Input() levelColor: string;
  color: string;

  constructor() { 
  }

  ngOnInit() {
    this.setColor();
  }

  private setColor() {
    switch(this.levelColor) {
      case 'colorJunior':
        this.color = 'panel panel-danger';
        break;
      case 'colorIntermediate':
        this.color = 'panel panel-warning';
      break;
        case 'colorSenior':
        this.color = 'panel panel-success';
        break;
      case 'colorLead':
        this.color = 'panel panel-info';
        break;
    }
  }

}
