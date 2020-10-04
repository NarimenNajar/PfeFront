import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormationPNTComponent } from './ajouter-formation-pnt.component';

describe('AjouterFormationPNTComponent', () => {
  let component: AjouterFormationPNTComponent;
  let fixture: ComponentFixture<AjouterFormationPNTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFormationPNTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormationPNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
