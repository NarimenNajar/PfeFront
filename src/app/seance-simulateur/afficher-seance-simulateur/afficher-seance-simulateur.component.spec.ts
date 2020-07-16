import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSeanceSimulateurComponent } from './afficher-seance-simulateur.component';

describe('AfficherSeanceSimulateurComponent', () => {
  let component: AfficherSeanceSimulateurComponent;
  let fixture: ComponentFixture<AfficherSeanceSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSeanceSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSeanceSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
