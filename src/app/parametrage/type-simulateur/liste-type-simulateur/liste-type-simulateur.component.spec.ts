import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeSimulateurComponent } from './liste-type-simulateur.component';

describe('ListeTypeSimulateurComponent', () => {
  let component: ListeTypeSimulateurComponent;
  let fixture: ComponentFixture<ListeTypeSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
