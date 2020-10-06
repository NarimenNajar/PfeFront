import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSimulateurComponent } from './ajouter-simulateur.component';

describe('AjouterSimulateurComponent', () => {
  let component: AjouterSimulateurComponent;
  let fixture: ComponentFixture<AjouterSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
