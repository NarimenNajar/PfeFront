import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInstructionsInstructorComponent } from './liste-instructions-instructor.component';

describe('ListeInstructionsInstructorComponent', () => {
  let component: ListeInstructionsInstructorComponent;
  let fixture: ComponentFixture<ListeInstructionsInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInstructionsInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInstructionsInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
