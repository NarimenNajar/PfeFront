import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeFonctionComponent } from './ajouter-type-fonction.component';

describe('AjouterTypeFonctionComponent', () => {
  let component: AjouterTypeFonctionComponent;
  let fixture: ComponentFixture<AjouterTypeFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTypeFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
