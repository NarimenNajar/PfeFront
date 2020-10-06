import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInstructionSimulateurComponent } from './ajouter-instruction-simulateur.component';

describe('AjouterInstructionSimulateurComponent', () => {
  let component: AjouterInstructionSimulateurComponent;
  let fixture: ComponentFixture<AjouterInstructionSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterInstructionSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInstructionSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
