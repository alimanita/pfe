import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpediteurAddexpediteurComponent } from './addexpediteur.component';

describe('AdminExpediteurAddexpediteurComponent', () => {
  let component: AdminExpediteurAddexpediteurComponent;
  let fixture: ComponentFixture<AdminExpediteurAddexpediteurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExpediteurAddexpediteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpediteurAddexpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
