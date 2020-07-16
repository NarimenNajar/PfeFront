import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSeancesSimulateurComponent } from './mes-seances-simulateur.component';

describe('MesSeancesSimulateurComponent', () => {
  let component: MesSeancesSimulateurComponent;
  let fixture: ComponentFixture<MesSeancesSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesSeancesSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesSeancesSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
