import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocalAddlocalComponent } from './addlocal.component';

describe('AdminLocalAddlocalComponent', () => {
  let component: AdminLocalAddlocalComponent;
  let fixture: ComponentFixture<AdminLocalAddlocalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLocalAddlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocalAddlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
