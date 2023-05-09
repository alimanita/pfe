import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesAddroleComponent } from './addrole.component';

describe('AdminRolesAddroleComponent', () => {
  let component: AdminRolesAddroleComponent;
  let fixture: ComponentFixture<AdminRolesAddroleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRolesAddroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesAddroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
