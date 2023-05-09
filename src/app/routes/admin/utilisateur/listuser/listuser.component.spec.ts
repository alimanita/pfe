import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurListuserComponent } from './listuser.component';

describe('AdminUtilisateurListuserComponent', () => {
  let component: AdminUtilisateurListuserComponent;
  let fixture: ComponentFixture<AdminUtilisateurListuserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUtilisateurListuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUtilisateurListuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
