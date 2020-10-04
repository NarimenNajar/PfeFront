import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTypeFormationComponent } from './afficher-type-formation.component';

describe('AfficherTypeFormationComponent', () => {
  let component: AfficherTypeFormationComponent;
  let fixture: ComponentFixture<AfficherTypeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherTypeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
