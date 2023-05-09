import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinateurListdestinateurComponent } from './listdestinateur.component';

describe('AdminDestinateurListdestinateurComponent', () => {
  let component: AdminDestinateurListdestinateurComponent;
  let fixture: ComponentFixture<AdminDestinateurListdestinateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDestinateurListdestinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDestinateurListdestinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
