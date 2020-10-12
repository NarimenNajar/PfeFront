import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFonctionsCurrentComponent } from './liste-fonctions-current.component';

describe('ListeFonctionsCurrentComponent', () => {
  let component: ListeFonctionsCurrentComponent;
  let fixture: ComponentFixture<ListeFonctionsCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFonctionsCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFonctionsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
