import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMyAlerteEcheanceInstructionComponent } from './liste-my-alerte-echeance-instruction.component';

describe('ListeMyAlerteEcheanceInstructionComponent', () => {
  let component: ListeMyAlerteEcheanceInstructionComponent;
  let fixture: ComponentFixture<ListeMyAlerteEcheanceInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMyAlerteEcheanceInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMyAlerteEcheanceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
