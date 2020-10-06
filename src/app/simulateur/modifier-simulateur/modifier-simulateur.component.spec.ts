import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSimulateurComponent } from './modifier-simulateur.component';

describe('ModifierSimulateurComponent', () => {
  let component: ModifierSimulateurComponent;
  let fixture: ComponentFixture<ModifierSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
