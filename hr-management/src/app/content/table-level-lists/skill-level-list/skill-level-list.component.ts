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
  headerColor: string;
  containerColor: string;

  constructor() { 
  }

  ngOnInit() {
    this.setColor();
  }

  private setColor() {
    switch(this.levelColor) {
      case 'colorJunior':
        this.headerColor = '#ebccd1';
        this.containerColor = '#f2dede';
        break;
      case 'colorIntermediate':
        this.headerColor = '#faebcc';
        this.containerColor = '#fcf8e3';
      break;
        case 'colorSenior':
        this.headerColor = '#d6e9c6';
        this.containerColor = '#dff0d8';
        break;
      case 'colorLead':
        this.headerColor = '#bce8f1';
        this.containerColor = '#d9edf7';
        break;
    }
  }

}
