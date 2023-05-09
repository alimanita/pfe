import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefagenceListcolischefComponent } from './listcolischef.component';

describe('ChefagenceListcolischefComponent', () => {
  let component: ChefagenceListcolischefComponent;
  let fixture: ComponentFixture<ChefagenceListcolischefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefagenceListcolischefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefagenceListcolischefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
