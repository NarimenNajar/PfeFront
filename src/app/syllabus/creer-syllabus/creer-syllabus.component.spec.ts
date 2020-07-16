import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSyllabusComponent } from './creer-syllabus.component';

describe('CreerSyllabusComponent', () => {
  let component: CreerSyllabusComponent;
  let fixture: ComponentFixture<CreerSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
