import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesUpdateComponent } from './update.component';

describe('AdminRolesUpdateComponent', () => {
  let component: AdminRolesUpdateComponent;
  let fixture: ComponentFixture<AdminRolesUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRolesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
