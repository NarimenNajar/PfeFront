import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSyllabusComponent } from './liste-syllabus.component';

describe('ListeSyllabusComponent', () => {
  let component: ListeSyllabusComponent;
  let fixture: ComponentFixture<ListeSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
