import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinateurAddestinateurComponent } from './addestinateur.component';

describe('AdminDestinateurAddestinateurComponent', () => {
  let component: AdminDestinateurAddestinateurComponent;
  let fixture: ComponentFixture<AdminDestinateurAddestinateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDestinateurAddestinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDestinateurAddestinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
