import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParametrageEcheanceComponent } from './modifier-parametrage-echeance.component';

describe('ModifierParametrageEcheanceComponent', () => {
  let component: ModifierParametrageEcheanceComponent;
  let fixture: ComponentFixture<ModifierParametrageEcheanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierParametrageEcheanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierParametrageEcheanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
