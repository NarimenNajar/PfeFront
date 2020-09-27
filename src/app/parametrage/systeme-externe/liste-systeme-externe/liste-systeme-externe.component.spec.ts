import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSystemeExterneComponent } from './liste-systeme-externe.component';

describe('ListeSystemeExterneComponent', () => {
  let component: ListeSystemeExterneComponent;
  let fixture: ComponentFixture<ListeSystemeExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSystemeExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSystemeExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
