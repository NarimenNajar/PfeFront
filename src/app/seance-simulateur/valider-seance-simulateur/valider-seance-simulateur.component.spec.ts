import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderSeanceSimulateurComponent } from './valider-seance-simulateur.component';

describe('ValiderSeanceSimulateurComponent', () => {
  let component: ValiderSeanceSimulateurComponent;
  let fixture: ComponentFixture<ValiderSeanceSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderSeanceSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderSeanceSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
