import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFonctionnaliteComponent } from './liste-fonctionnalite.component';

describe('ListeFonctionnaliteComponent', () => {
  let component: ListeFonctionnaliteComponent;
  let fixture: ComponentFixture<ListeFonctionnaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFonctionnaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFonctionnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
