import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierNatureFormationComponent } from './modifier-nature-formation.component';

describe('ModifierNatureFormationComponent', () => {
  let component: ModifierNatureFormationComponent;
  let fixture: ComponentFixture<ModifierNatureFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierNatureFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierNatureFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
