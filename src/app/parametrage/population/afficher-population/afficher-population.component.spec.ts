import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPopulationComponent } from './afficher-population.component';

describe('AfficherPopulationComponent', () => {
  let component: AfficherPopulationComponent;
  let fixture: ComponentFixture<AfficherPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
