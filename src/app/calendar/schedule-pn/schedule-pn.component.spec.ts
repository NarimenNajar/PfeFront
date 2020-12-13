import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePNComponent } from './schedule-pn.component';

describe('SchedulePNComponent', () => {
  let component: SchedulePNComponent;
  let fixture: ComponentFixture<SchedulePNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
