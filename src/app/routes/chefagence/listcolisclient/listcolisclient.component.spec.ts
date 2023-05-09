import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefagenceListcolisclientComponent } from './listcolisclient.component';

describe('ChefagenceListcolisclientComponent', () => {
  let component: ChefagenceListcolisclientComponent;
  let fixture: ComponentFixture<ChefagenceListcolisclientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefagenceListcolisclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefagenceListcolisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
