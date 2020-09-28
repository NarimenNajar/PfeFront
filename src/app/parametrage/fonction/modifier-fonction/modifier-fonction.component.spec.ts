import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFonctionComponent } from './modifier-fonction.component';

describe('ModifierFonctionComponent', () => {
  let component: ModifierFonctionComponent;
  let fixture: ComponentFixture<ModifierFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
