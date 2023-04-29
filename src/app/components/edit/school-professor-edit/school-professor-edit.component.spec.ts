import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProfessorEditComponent } from './school-professor-edit.component';

describe('SchoolProfessorEditComponent', () => {
  let component: SchoolProfessorEditComponent;
  let fixture: ComponentFixture<SchoolProfessorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolProfessorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolProfessorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
