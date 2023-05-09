import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoyageListvoyageComponent } from './listvoyage.component';

describe('AdminVoyageListvoyageComponent', () => {
  let component: AdminVoyageListvoyageComponent;
  let fixture: ComponentFixture<AdminVoyageListvoyageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVoyageListvoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVoyageListvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
