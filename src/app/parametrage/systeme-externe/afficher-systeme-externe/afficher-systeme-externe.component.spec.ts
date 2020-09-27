import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSystemeExterneComponent } from './afficher-systeme-externe.component';

describe('AfficherSystemeExterneComponent', () => {
  let component: AfficherSystemeExterneComponent;
  let fixture: ComponentFixture<AfficherSystemeExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherSystemeExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherSystemeExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
