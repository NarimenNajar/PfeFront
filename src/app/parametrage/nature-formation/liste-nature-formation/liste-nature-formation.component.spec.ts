import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNatureFormationComponent } from './liste-nature-formation.component';

describe('ListeNatureFormationComponent', () => {
  let component: ListeNatureFormationComponent;
  let fixture: ComponentFixture<ListeNatureFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeNatureFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNatureFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
