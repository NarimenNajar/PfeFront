import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormationPNCComponent } from './ajouter-formation-pnc.component';

describe('AjouterFormationPNCComponent', () => {
  let component: AjouterFormationPNCComponent;
  let fixture: ComponentFixture<AjouterFormationPNCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFormationPNCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormationPNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
