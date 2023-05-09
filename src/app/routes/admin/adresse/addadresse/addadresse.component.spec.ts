import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdresseAddadresseComponent } from './addadresse.component';

describe('AdminAdresseAddadresseComponent', () => {
  let component: AdminAdresseAddadresseComponent;
  let fixture: ComponentFixture<AdminAdresseAddadresseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdresseAddadresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdresseAddadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
