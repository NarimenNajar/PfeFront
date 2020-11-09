import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamationsNonTraiteeComponent } from './liste-reclamations-non-traitee.component';

describe('ListeReclamationsNonTraiteeComponent', () => {
  let component: ListeReclamationsNonTraiteeComponent;
  let fixture: ComponentFixture<ListeReclamationsNonTraiteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReclamationsNonTraiteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamationsNonTraiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
