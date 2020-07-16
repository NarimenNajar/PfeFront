import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSeancesSimulateurComponent } from './archive-seances-simulateur.component';

describe('ArchiveSeancesSimulateurComponent', () => {
  let component: ArchiveSeancesSimulateurComponent;
  let fixture: ComponentFixture<ArchiveSeancesSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveSeancesSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveSeancesSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
