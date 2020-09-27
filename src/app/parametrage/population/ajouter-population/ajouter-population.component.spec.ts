import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPopulationComponent } from './ajouter-population.component';

describe('AjouterPopulationComponent', () => {
  let component: AjouterPopulationComponent;
  let fixture: ComponentFixture<AjouterPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
