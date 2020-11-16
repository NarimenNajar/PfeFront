import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMyInstructionsTodayInstructorComponent } from './liste-my-instructions-today-instructor.component';

describe('ListeMyInstructionsTodayInstructorComponent', () => {
  let component: ListeMyInstructionsTodayInstructorComponent;
  let fixture: ComponentFixture<ListeMyInstructionsTodayInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMyInstructionsTodayInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMyInstructionsTodayInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
