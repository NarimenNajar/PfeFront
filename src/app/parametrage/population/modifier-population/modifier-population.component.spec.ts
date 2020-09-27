import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPopulationComponent } from './modifier-population.component';

describe('ModifierPopulationComponent', () => {
  let component: ModifierPopulationComponent;
  let fixture: ComponentFixture<ModifierPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
