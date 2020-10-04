import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParametrageEcheanceComponent } from './liste-parametrage-echeance.component';

describe('ListeParametrageEcheanceComponent', () => {
  let component: ListeParametrageEcheanceComponent;
  let fixture: ComponentFixture<ListeParametrageEcheanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParametrageEcheanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParametrageEcheanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
