import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFonctionnaliteComponent } from './modifier-fonctionnalite.component';

describe('ModifierFonctionnaliteComponent', () => {
  let component: ModifierFonctionnaliteComponent;
  let fixture: ComponentFixture<ModifierFonctionnaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFonctionnaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFonctionnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
