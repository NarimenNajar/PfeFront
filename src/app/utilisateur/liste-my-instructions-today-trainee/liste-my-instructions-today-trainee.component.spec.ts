import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMyInstructionsTodayTraineeComponent } from './liste-my-instructions-today-trainee.component';

describe('ListeMyInstructionsTodayTraineeComponent', () => {
  let component: ListeMyInstructionsTodayTraineeComponent;
  let fixture: ComponentFixture<ListeMyInstructionsTodayTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMyInstructionsTodayTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMyInstructionsTodayTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
