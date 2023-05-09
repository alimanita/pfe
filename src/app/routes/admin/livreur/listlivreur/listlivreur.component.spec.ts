import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreurListlivreurComponent } from './listlivreur.component';

describe('AdminLivreurListlivreurComponent', () => {
  let component: AdminLivreurListlivreurComponent;
  let fixture: ComponentFixture<AdminLivreurListlivreurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLivreurListlivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLivreurListlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
