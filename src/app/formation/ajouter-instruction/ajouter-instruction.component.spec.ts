import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInstructionComponent } from './ajouter-instruction.component';

describe('AjouterInstructionComponent', () => {
  let component: AjouterInstructionComponent;
  let fixture: ComponentFixture<AjouterInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
