import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdresseListadresseComponent } from './listadresse.component';

describe('AdminAdresseListadresseComponent', () => {
  let component: AdminAdresseListadresseComponent;
  let fixture: ComponentFixture<AdminAdresseListadresseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdresseListadresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdresseListadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
