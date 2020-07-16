import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSyllabusComponent } from './afficher-syllabus.component';

describe('AfficherSyllabusComponent', () => {
  let component: AfficherSyllabusComponent;
  let fixture: ComponentFixture<AfficherSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
