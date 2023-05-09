import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreurAddlivreurComponent } from './addlivreur.component';

describe('AdminLivreurAddlivreurComponent', () => {
  let component: AdminLivreurAddlivreurComponent;
  let fixture: ComponentFixture<AdminLivreurAddlivreurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLivreurAddlivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLivreurAddlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
