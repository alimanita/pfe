import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayoutComponent } from './layout.component';

describe('ProfileLayoutComponent', () => {
  let component: ProfileLayoutComponent;
  let fixture: ComponentFixture<ProfileLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
