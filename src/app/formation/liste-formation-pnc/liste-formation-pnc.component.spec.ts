import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationPNCComponent } from './liste-formation-pnc.component';

describe('ListeFormationPNCComponent', () => {
  let component: ListeFormationPNCComponent;
  let fixture: ComponentFixture<ListeFormationPNCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormationPNCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationPNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
