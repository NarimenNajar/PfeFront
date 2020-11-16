import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsResultSimulatorComponent } from './charts-result-simulator.component';

describe('ChartsResultSimulatorComponent', () => {
  let component: ChartsResultSimulatorComponent;
  let fixture: ComponentFixture<ChartsResultSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsResultSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsResultSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
