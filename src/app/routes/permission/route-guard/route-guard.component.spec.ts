import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRouteGuardComponent } from './route-guard.component';

describe('PermissionRouteGuardComponent', () => {
  let component: PermissionRouteGuardComponent;
  let fixture: ComponentFixture<PermissionRouteGuardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionRouteGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
