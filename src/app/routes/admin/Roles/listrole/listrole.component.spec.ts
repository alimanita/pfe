import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesListroleComponent } from './listrole.component';

describe('AdminRolesListroleComponent', () => {
  let component: AdminRolesListroleComponent;
  let fixture: ComponentFixture<AdminRolesListroleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRolesListroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesListroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
