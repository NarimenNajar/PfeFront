import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNatureFormationComponent } from './ajouter-nature-formation.component';

describe('AjouterNatureFormationComponent', () => {
  let component: AjouterNatureFormationComponent;
  let fixture: ComponentFixture<AjouterNatureFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterNatureFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNatureFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
