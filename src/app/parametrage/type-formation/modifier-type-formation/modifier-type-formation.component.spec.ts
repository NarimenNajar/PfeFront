import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeFormationComponent } from './modifier-type-formation.component';

describe('ModifierTypeFormationComponent', () => {
  let component: ModifierTypeFormationComponent;
  let fixture: ComponentFixture<ModifierTypeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
