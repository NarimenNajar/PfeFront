import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAllAlerteEcheanceInstructionComponent } from './liste-all-alerte-echeance-instruction.component';

describe('ListeAllAlerteEcheanceInstructionComponent', () => {
  let component: ListeAllAlerteEcheanceInstructionComponent;
  let fixture: ComponentFixture<ListeAllAlerteEcheanceInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAllAlerteEcheanceInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAllAlerteEcheanceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
