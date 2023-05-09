import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoyageAddvoyageComponent } from './addvoyage.component';

describe('AdminVoyageAddvoyageComponent', () => {
  let component: AdminVoyageAddvoyageComponent;
  let fixture: ComponentFixture<AdminVoyageAddvoyageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVoyageAddvoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVoyageAddvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
