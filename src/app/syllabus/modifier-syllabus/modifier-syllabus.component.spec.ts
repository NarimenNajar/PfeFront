import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSyllabusComponent } from './modifier-syllabus.component';

describe('ModifierSyllabusComponent', () => {
  let component: ModifierSyllabusComponent;
  let fixture: ComponentFixture<ModifierSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
