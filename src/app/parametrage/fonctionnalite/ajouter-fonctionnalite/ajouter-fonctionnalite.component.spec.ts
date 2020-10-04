import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFonctionnaliteComponent } from './ajouter-fonctionnalite.component';

describe('AjouterFonctionnaliteComponent', () => {
  let component: AjouterFonctionnaliteComponent;
  let fixture: ComponentFixture<AjouterFonctionnaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFonctionnaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFonctionnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
