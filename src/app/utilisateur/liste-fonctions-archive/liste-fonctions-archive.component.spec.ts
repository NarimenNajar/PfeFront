import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFonctionsArchiveComponent } from './liste-fonctions-archive.component';

describe('ListeFonctionsArchiveComponent', () => {
  let component: ListeFonctionsArchiveComponent;
  let fixture: ComponentFixture<ListeFonctionsArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFonctionsArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFonctionsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
