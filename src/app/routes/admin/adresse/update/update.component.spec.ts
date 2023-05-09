import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdresseUpdateComponent } from './update.component';

describe('AdminAdresseUpdateComponent', () => {
  let component: AdminAdresseUpdateComponent;
  let fixture: ComponentFixture<AdminAdresseUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdresseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdresseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
