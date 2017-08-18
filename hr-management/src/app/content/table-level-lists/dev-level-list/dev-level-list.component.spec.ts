import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevLevelListComponent } from './dev-level-list.component';

describe('DevLevelListComponent', () => {
  let component: DevLevelListComponent;
  let fixture: ComponentFixture<DevLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
