import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeSimulateurComponent } from './ajouter-type-simulateur.component';

describe('AjouterTypeSimulateurComponent', () => {
  let component: AjouterTypeSimulateurComponent;
  let fixture: ComponentFixture<AjouterTypeSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTypeSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
