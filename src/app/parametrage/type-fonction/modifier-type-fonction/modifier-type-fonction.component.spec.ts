import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeFonctionComponent } from './modifier-type-fonction.component';

describe('ModifierTypeFonctionComponent', () => {
  let component: ModifierTypeFonctionComponent;
  let fixture: ComponentFixture<ModifierTypeFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
