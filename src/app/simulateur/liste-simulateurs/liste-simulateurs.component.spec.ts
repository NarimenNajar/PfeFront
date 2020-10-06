import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSimulateursComponent } from './liste-simulateurs.component';

describe('ListeSimulateursComponent', () => {
  let component: ListeSimulateursComponent;
  let fixture: ComponentFixture<ListeSimulateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSimulateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSimulateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
