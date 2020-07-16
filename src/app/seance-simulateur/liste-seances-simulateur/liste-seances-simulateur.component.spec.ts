import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSeancesSimulateurComponent } from './liste-seances-simulateur.component';

describe('ListeSeancesSimulateurComponent', () => {
  let component: ListeSeancesSimulateurComponent;
  let fixture: ComponentFixture<ListeSeancesSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSeancesSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSeancesSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
