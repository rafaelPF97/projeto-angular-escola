import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDiretorEditComponent } from './school-diretor-edit.component';

describe('SchoolDiretorEditComponent', () => {
  let component: SchoolDiretorEditComponent;
  let fixture: ComponentFixture<SchoolDiretorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDiretorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDiretorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
