import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReclamationComponent } from './afficher-reclamation.component';

describe('AfficherReclamationComponent', () => {
  let component: AfficherReclamationComponent;
  let fixture: ComponentFixture<AfficherReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
