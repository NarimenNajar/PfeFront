import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFonctionComponent } from './afficher-fonction.component';

describe('AfficherFonctionComponent', () => {
  let component: AfficherFonctionComponent;
  let fixture: ComponentFixture<AfficherFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
