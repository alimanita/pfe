import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOveriewComponent } from './overiew.component';

describe('ProfileOveriewComponent', () => {
  let component: ProfileOveriewComponent;
  let fixture: ComponentFixture<ProfileOveriewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOveriewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOveriewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
