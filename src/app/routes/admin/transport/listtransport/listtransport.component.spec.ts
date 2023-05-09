import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransportListtransportComponent } from './listtransport.component';

describe('AdminTransportListtransportComponent', () => {
  let component: AdminTransportListtransportComponent;
  let fixture: ComponentFixture<AdminTransportListtransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransportListtransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransportListtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
