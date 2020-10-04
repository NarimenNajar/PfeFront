import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeSimulateurComponent } from './modifier-type-simulateur.component';

describe('ModifierTypeSimulateurComponent', () => {
  let component: ModifierTypeSimulateurComponent;
  let fixture: ComponentFixture<ModifierTypeSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
