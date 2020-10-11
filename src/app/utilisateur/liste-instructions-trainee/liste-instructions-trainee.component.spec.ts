import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInstructionsTraineeComponent } from './liste-instructions-trainee.component';

describe('ListeInstructionsTraineeComponent', () => {
  let component: ListeInstructionsTraineeComponent;
  let fixture: ComponentFixture<ListeInstructionsTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInstructionsTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInstructionsTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
