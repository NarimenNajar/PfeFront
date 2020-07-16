import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterSeanceSimulateurComponent } from './noter-seance-simulateur.component';

describe('NoterSeanceSimulateurComponent', () => {
  let component: NoterSeanceSimulateurComponent;
  let fixture: ComponentFixture<NoterSeanceSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoterSeanceSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoterSeanceSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
