import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSeancesComponent } from './archive-seances.component';

describe('ArchiveSeancesComponent', () => {
  let component: ArchiveSeancesComponent;
  let fixture: ComponentFixture<ArchiveSeancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveSeancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
