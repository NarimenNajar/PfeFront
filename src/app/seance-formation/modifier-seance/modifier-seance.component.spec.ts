import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSeanceComponent } from './modifier-seance.component';

describe('ModifierSeanceComponent', () => {
  let component: ModifierSeanceComponent;
  let fixture: ComponentFixture<ModifierSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
