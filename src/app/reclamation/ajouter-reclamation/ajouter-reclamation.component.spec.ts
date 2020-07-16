import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReclamationComponent } from './ajouter-reclamation.component';

describe('AjouterReclamationComponent', () => {
  let component: AjouterReclamationComponent;
  let fixture: ComponentFixture<AjouterReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
