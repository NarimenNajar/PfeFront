import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFormationComponent } from './afficher-formation.component';

describe('AfficherFormationComponent', () => {
  let component: AfficherFormationComponent;
  let fixture: ComponentFixture<AfficherFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
