import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpediteurListexpediteurComponent } from './listexpediteur.component';

describe('AdminExpediteurListexpediteurComponent', () => {
  let component: AdminExpediteurListexpediteurComponent;
  let fixture: ComponentFixture<AdminExpediteurListexpediteurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExpediteurListexpediteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpediteurListexpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
