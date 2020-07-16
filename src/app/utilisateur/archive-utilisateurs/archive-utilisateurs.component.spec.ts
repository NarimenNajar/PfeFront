import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveUtilisateursComponent } from './archive-utilisateurs.component';

describe('ArchiveUtilisateursComponent', () => {
  let component: ArchiveUtilisateursComponent;
  let fixture: ComponentFixture<ArchiveUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
