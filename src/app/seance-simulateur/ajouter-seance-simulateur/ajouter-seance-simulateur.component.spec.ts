import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSeanceSimulateurComponent } from './ajouter-seance-simulateur.component';

describe('AjouterSeanceSimulateurComponent', () => {
  let component: AjouterSeanceSimulateurComponent;
  let fixture: ComponentFixture<AjouterSeanceSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSeanceSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSeanceSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
