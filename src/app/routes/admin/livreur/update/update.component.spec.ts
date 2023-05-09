import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreurUpdateComponent } from './update.component';

describe('AdminLivreurUpdateComponent', () => {
  let component: AdminLivreurUpdateComponent;
  let fixture: ComponentFixture<AdminLivreurUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLivreurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLivreurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
