import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddcolisclientComponent } from './addcolisclient.component';

describe('ClientAddcolisclientComponent', () => {
  let component: ClientAddcolisclientComponent;
  let fixture: ComponentFixture<ClientAddcolisclientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddcolisclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddcolisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
