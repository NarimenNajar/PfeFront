import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRoleComponent } from './afficher-role.component';

describe('AfficherRoleComponent', () => {
  let component: AfficherRoleComponent;
  let fixture: ComponentFixture<AfficherRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
