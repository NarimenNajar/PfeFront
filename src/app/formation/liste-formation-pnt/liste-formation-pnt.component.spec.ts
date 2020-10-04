import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationPNTComponent } from './liste-formation-pnt.component';

describe('ListeFormationPNTComponent', () => {
  let component: ListeFormationPNTComponent;
  let fixture: ComponentFixture<ListeFormationPNTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormationPNTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationPNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
