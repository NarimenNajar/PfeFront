import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInstructionsComponent } from './calendar-instructions.component';

describe('CalendarInstructionsComponent', () => {
  let component: CalendarInstructionsComponent;
  let fixture: ComponentFixture<CalendarInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
