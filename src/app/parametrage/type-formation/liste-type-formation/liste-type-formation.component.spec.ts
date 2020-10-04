import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeFormationComponent } from './liste-type-formation.component';

describe('ListeTypeFormationComponent', () => {
  let component: ListeTypeFormationComponent;
  let fixture: ComponentFixture<ListeTypeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
