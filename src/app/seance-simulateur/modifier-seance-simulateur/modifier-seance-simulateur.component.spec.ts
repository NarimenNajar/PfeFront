import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSeanceSimulateurComponent } from './modifier-seance-simulateur.component';

describe('ModifierSeanceSimulateurComponent', () => {
  let component: ModifierSeanceSimulateurComponent;
  let fixture: ComponentFixture<ModifierSeanceSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSeanceSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSeanceSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
