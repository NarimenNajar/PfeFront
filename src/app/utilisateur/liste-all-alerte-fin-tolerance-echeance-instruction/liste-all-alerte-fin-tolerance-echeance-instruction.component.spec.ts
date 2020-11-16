import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAllAlerteFinToleranceEcheanceInstructionComponent } from './liste-all-alerte-fin-tolerance-echeance-instruction.component';

describe('ListeAllAlerteFinToleranceEcheanceInstructionComponent', () => {
  let component: ListeAllAlerteFinToleranceEcheanceInstructionComponent;
  let fixture: ComponentFixture<ListeAllAlerteFinToleranceEcheanceInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAllAlerteFinToleranceEcheanceInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAllAlerteFinToleranceEcheanceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
