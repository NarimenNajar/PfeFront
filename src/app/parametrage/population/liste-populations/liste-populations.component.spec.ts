import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePopulationsComponent } from './liste-populations.component';

describe('ListePopulationsComponent', () => {
  let component: ListePopulationsComponent;
  let fixture: ComponentFixture<ListePopulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePopulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePopulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
