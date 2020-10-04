import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherParametrageEcheanceComponent } from './afficher-parametrage-echeance.component';

describe('AfficherParametrageEcheanceComponent', () => {
  let component: AfficherParametrageEcheanceComponent;
  let fixture: ComponentFixture<AfficherParametrageEcheanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherParametrageEcheanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherParametrageEcheanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
