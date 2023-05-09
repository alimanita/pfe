import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransportAddtransportComponent } from './addtransport.component';

describe('AdminTransportAddtransportComponent', () => {
  let component: AdminTransportAddtransportComponent;
  let fixture: ComponentFixture<AdminTransportAddtransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransportAddtransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransportAddtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
