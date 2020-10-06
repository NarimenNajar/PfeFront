import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTraineeSimulateurComponent } from './validation-trainee-simulateur.component';

describe('ValidationTraineeSimulateurComponent', () => {
  let component: ValidationTraineeSimulateurComponent;
  let fixture: ComponentFixture<ValidationTraineeSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationTraineeSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTraineeSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
