import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSystemeExterneComponent } from './ajouter-systeme-externe.component';

describe('AjouterSystemeExterneComponent', () => {
  let component: AjouterSystemeExterneComponent;
  let fixture: ComponentFixture<AjouterSystemeExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSystemeExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSystemeExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
