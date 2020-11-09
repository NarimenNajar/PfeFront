import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamationsTraiteeComponent } from './liste-reclamations-traitee.component';

describe('ListeReclamationsTraiteeComponent', () => {
  let component: ListeReclamationsTraiteeComponent;
  let fixture: ComponentFixture<ListeReclamationsTraiteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReclamationsTraiteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamationsTraiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
