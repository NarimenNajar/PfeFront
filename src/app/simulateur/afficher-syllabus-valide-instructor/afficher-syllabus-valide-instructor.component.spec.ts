import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSyllabusValideInstructorComponent } from './afficher-syllabus-valide-instructor.component';

describe('AfficherSyllabusValideInstructorComponent', () => {
  let component: AfficherSyllabusValideInstructorComponent;
  let fixture: ComponentFixture<AfficherSyllabusValideInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSyllabusValideInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSyllabusValideInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
