import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocalListlocalComponent } from './listlocal.component';

describe('AdminLocalListlocalComponent', () => {
  let component: AdminLocalListlocalComponent;
  let fixture: ComponentFixture<AdminLocalListlocalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLocalListlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocalListlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
