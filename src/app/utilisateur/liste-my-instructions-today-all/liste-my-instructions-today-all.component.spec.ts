import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMyInstructionsTodayAllComponent } from './liste-my-instructions-today-all.component';

describe('ListeMyInstructionsTodayAllComponent', () => {
  let component: ListeMyInstructionsTodayAllComponent;
  let fixture: ComponentFixture<ListeMyInstructionsTodayAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMyInstructionsTodayAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMyInstructionsTodayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
