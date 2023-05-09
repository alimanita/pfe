import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurAdduserComponent } from './adduser.component';

describe('AdminUtilisateurAdduserComponent', () => {
  let component: AdminUtilisateurAdduserComponent;
  let fixture: ComponentFixture<AdminUtilisateurAdduserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUtilisateurAdduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUtilisateurAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
