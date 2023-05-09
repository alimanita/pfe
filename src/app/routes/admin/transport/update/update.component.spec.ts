import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransportUpdateComponent } from './update.component';

describe('AdminTransportUpdateComponent', () => {
  let component: AdminTransportUpdateComponent;
  let fixture: ComponentFixture<AdminTransportUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransportUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransportUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
