import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSyllabusValideTraineeComponent } from './afficher-syllabus-valide-trainee.component';

describe('AfficherSyllabusValideTraineeComponent', () => {
  let component: AfficherSyllabusValideTraineeComponent;
  let fixture: ComponentFixture<AfficherSyllabusValideTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSyllabusValideTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSyllabusValideTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
