import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeFormationComponent } from './ajouter-type-formation.component';

describe('AjouterTypeFormationComponent', () => {
  let component: AjouterTypeFormationComponent;
  let fixture: ComponentFixture<AjouterTypeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTypeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
