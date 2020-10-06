import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationInstructeurSimulateurComponent } from './validation-instructeur-simulateur.component';

describe('ValidationInstructeurSimulateurComponent', () => {
  let component: ValidationInstructeurSimulateurComponent;
  let fixture: ComponentFixture<ValidationInstructeurSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationInstructeurSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationInstructeurSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
