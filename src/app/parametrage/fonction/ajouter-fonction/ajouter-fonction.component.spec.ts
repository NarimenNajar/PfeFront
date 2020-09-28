import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFonctionComponent } from './ajouter-fonction.component';

describe('AjouterFonctionComponent', () => {
  let component: AjouterFonctionComponent;
  let fixture: ComponentFixture<AjouterFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
