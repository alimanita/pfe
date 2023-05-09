import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRoleSwitchingComponent } from './role-switching.component';

describe('PermissionRoleSwitchingComponent', () => {
  let component: PermissionRoleSwitchingComponent;
  let fixture: ComponentFixture<PermissionRoleSwitchingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionRoleSwitchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionRoleSwitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
