import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelListComponent } from './skill-level-list.component';

describe('SkillLevelListComponent', () => {
  let component: SkillLevelListComponent;
  let fixture: ComponentFixture<SkillLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
