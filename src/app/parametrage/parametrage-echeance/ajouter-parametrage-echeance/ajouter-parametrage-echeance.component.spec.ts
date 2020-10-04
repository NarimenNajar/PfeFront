import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterParametrageEcheanceComponent } from './ajouter-parametrage-echeance.component';

describe('AjouterParametrageEcheanceComponent', () => {
  let component: AjouterParametrageEcheanceComponent;
  let fixture: ComponentFixture<AjouterParametrageEcheanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterParametrageEcheanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterParametrageEcheanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
