import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeFonctionComponent } from './liste-type-fonction.component';

describe('ListeTypeFonctionComponent', () => {
  let component: ListeTypeFonctionComponent;
  let fixture: ComponentFixture<ListeTypeFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
