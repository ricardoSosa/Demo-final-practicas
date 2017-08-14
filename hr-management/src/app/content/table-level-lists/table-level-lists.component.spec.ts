import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLevelListsComponent } from './table-level-lists.component';

describe('TableLevelListsComponent', () => {
  let component: TableLevelListsComponent;
  let fixture: ComponentFixture<TableLevelListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLevelListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLevelListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
