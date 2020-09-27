import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSystemeExterneComponent } from './modifier-systeme-externe.component';

describe('ModifierSystemeExterneComponent', () => {
  let component: ModifierSystemeExterneComponent;
  let fixture: ComponentFixture<ModifierSystemeExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSystemeExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSystemeExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
