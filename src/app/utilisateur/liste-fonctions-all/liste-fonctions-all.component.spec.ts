import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFonctionsAllComponent } from './liste-fonctions-all.component';

describe('ListeFonctionsAllComponent', () => {
  let component: ListeFonctionsAllComponent;
  let fixture: ComponentFixture<ListeFonctionsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFonctionsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFonctionsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
