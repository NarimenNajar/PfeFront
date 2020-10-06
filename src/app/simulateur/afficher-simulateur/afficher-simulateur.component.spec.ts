import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSimulateurComponent } from './afficher-simulateur.component';

describe('AfficherSimulateurComponent', () => {
  let component: AfficherSimulateurComponent;
  let fixture: ComponentFixture<AfficherSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
