import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCategorieComponent } from './afficher-categorie.component';

describe('AfficherCategorieComponent', () => {
  let component: AfficherCategorieComponent;
  let fixture: ComponentFixture<AfficherCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
