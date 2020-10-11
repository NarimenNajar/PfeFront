import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInstructionsArchiveComponent } from './liste-instructions-archive.component';

describe('ListeInstructionsArchiveComponent', () => {
  let component: ListeInstructionsArchiveComponent;
  let fixture: ComponentFixture<ListeInstructionsArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInstructionsArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInstructionsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
