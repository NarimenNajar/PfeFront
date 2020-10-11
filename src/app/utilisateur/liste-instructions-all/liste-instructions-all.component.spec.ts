import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInstructionsAllComponent } from './liste-instructions-all.component';

describe('ListeInstructionsAllComponent', () => {
  let component: ListeInstructionsAllComponent;
  let fixture: ComponentFixture<ListeInstructionsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInstructionsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInstructionsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
