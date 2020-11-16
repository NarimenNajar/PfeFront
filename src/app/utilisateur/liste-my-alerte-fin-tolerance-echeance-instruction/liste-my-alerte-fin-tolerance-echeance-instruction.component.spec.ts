import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMyAlerteFinToleranceEcheanceInstructionComponent } from './liste-my-alerte-fin-tolerance-echeance-instruction.component';

describe('ListeMyAlerteFinToleranceEcheanceInstructionComponent', () => {
  let component: ListeMyAlerteFinToleranceEcheanceInstructionComponent;
  let fixture: ComponentFixture<ListeMyAlerteFinToleranceEcheanceInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMyAlerteFinToleranceEcheanceInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMyAlerteFinToleranceEcheanceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
