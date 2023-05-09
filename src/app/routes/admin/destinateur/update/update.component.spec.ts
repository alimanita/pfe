import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinateurUpdateComponent } from './update.component';

describe('AdminDestinateurUpdateComponent', () => {
  let component: AdminDestinateurUpdateComponent;
  let fixture: ComponentFixture<AdminDestinateurUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDestinateurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDestinateurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
